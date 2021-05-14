import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class AudioDrawService {
  private audioContext = new AudioContext();

  //#region element refs
  WaveCanvas!: ElementRef<HTMLCanvasElement>;
  backgroundCanvas!: ElementRef<HTMLCanvasElement>;
  //#endregion

  //#region player style
  private initWaveColor = '#000000';
  private animationWaveColor = '#fff';
  private backgroundColor = '#5bbed6';
  private backgroundColorHover = '#1b5894';
  private waveLineThick = 2;
  //#endregion

  //#region logic variables
  private samples = 350; // the Default Number of samples we want to have in our final data set
  private songData!: number[]; // the audio converted to number[]
  private animationCounter = 0; // the counter that create the wave progression animation
  private interval!: any; // animation time interval
  private timeLoop!: number; // the loop value thats indicate when to draw the progression
  private duration!: number;
  playerReady: Subject<boolean> = new Subject();
  //#endregion

  constructor() {}
  // fetch the audio and converting it to number[] and init player drawing
  async generatePlayer(url: string, duration: number): Promise<void> {
    this.duration = duration;
    this.samples = duration * 100;
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
    this.draw(
      this.optimizeData(this.normalizeData(this.filterData(audioBuffer)))
    );
  }
  //#region generate and optimize data from Audio
  private optimizeData(data: number[]): number[] {
    this.samples = 350;
    const margin = Math.floor(data.length / this.samples);
    const optimizeData = [];
    for (let index = 0; index < data.length; index += margin) {
      optimizeData.push(data[index]);
    }
    return optimizeData;
  }
  private normalizeData(filteredData: any): any {
    const multiplier = Math.pow(Math.max(...filteredData), -5);
    return filteredData.map((n: number) => n * multiplier);
  }
  private filterData(audioBuffer: AudioBuffer): number[] {
    const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
    const blockSize = Math.floor(rawData.length / this.samples); // the number of samples in each subdivision
    const filteredData = [];
    for (let i = 0; i < this.samples; i++) {
      const blockStart = blockSize * i; // the location of the first sample in the block
      let sum = 0;
      for (let j = 0; j < blockSize; j++) {
        sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
      }
      filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
    }
    return filteredData;
  }
  //#endregion

  //#region draws the wave according to the song data
  private draw(normalizedData: number[]): void {
    this.timeLoop = (this.duration / normalizedData.length) * 1000;
    this.songData = normalizedData;
    this.colorBackGround();
    const dpr = window.devicePixelRatio || 1;
    const padding = 20;
    this.WaveCanvas.nativeElement.width =
      this.WaveCanvas.nativeElement.offsetWidth * dpr;
    this.WaveCanvas.nativeElement.height =
      (this.WaveCanvas.nativeElement.offsetHeight + padding * 2) * dpr;
    const ctx = this.WaveCanvas.nativeElement.getContext('2d');
    ctx?.scale(dpr, dpr);
    ctx?.translate(0, this.WaveCanvas.nativeElement.offsetHeight / 2 + padding); // set Y = 0 to be in the middle of the canvas
    const width =
      this.WaveCanvas.nativeElement.offsetWidth / normalizedData.length;
    for (let i = 0; i < normalizedData.length; i++) {
      const x = width * i;
      let height =
        normalizedData[i] * this.WaveCanvas.nativeElement.offsetHeight -
        padding;
      if (height < 0) {
        height = 0;
      } else if (height > this.WaveCanvas.nativeElement.offsetHeight / 2) {
        height = this.WaveCanvas.nativeElement.offsetHeight / 2;
      }
      this.drawLineSegment(
        ctx,
        x,
        height,
        width,
        (i + 1) % 2 === 0,
        this.initWaveColor
      );
    }
    this.playerReady.next(true);
  }
  private drawLineSegment(
    ctx: any,
    x: number,
    height: number,
    width: number,
    isEven: boolean,
    colorHex: string
  ): void {
    ctx.lineWidth = this.waveLineThick; // how thick the line is
    ctx.strokeStyle = colorHex; // what color our line is
    ctx.beginPath();
    height = isEven ? height : -height;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.arc(x + width / 2, height, width / 2, Math.PI, 0, isEven);
    ctx.lineTo(x + width, 0);
    ctx.stroke();
  }
  //#endregion

  //#region actions
  // color canvas background
  colorBackGround(): void {
    const ctx = this.backgroundCanvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.fillStyle = this.backgroundColor;
    }
    ctx?.fillRect(
      0,
      0,
      this.backgroundCanvas.nativeElement.width,
      this.backgroundCanvas.nativeElement.height
    );
  }
  // round time spans
  initTimeSpans(duration: number): number {
    return Math.round(duration);
  }
  redraw(): void {
    clearInterval(this.interval);
    this.draw(this.songData);
    this.animationCounter = 0;
  }
  // starting time interval
  play(): void {
    this.interval = this.innerPlay();
  }
  // stop time interval
  stop(): void {
    clearInterval(this.interval);
  }
  private innerPlay(): any {
    return setInterval(() => {
      this.animation();
      this.animationCounter++;
    }, this.timeLoop);
  }
  // draw the wave progression according to the time interval
  private animation(): void {
    const dpr = window.devicePixelRatio || 1;
    const padding = 20;
    this.WaveCanvas.nativeElement.width =
      this.WaveCanvas.nativeElement.offsetWidth * dpr;
    this.WaveCanvas.nativeElement.height =
      (this.WaveCanvas.nativeElement.offsetHeight + padding * 2) * dpr;
    const ctx = this.WaveCanvas.nativeElement.getContext('2d');
    ctx?.scale(dpr, dpr);
    ctx?.translate(0, this.WaveCanvas.nativeElement.offsetHeight / 2 + padding);
    const width =
      this.WaveCanvas.nativeElement.offsetWidth / this.songData.length;
    for (let i = 0; i < this.animationCounter; i++) {
      const x = width * i;
      let height =
        this.songData[i] * this.WaveCanvas.nativeElement.offsetHeight - padding;
      if (height < 0) {
        height = 0;
      } else if (height > this.WaveCanvas.nativeElement.offsetHeight / 2) {
        height = this.WaveCanvas.nativeElement.offsetHeight / 2;
      }
      this.drawLineSegment(
        ctx,
        x,
        height,
        width,
        (i + 1) % 2 === 0,
        this.animationWaveColor
      );
    }
    for (let i = this.animationCounter; i < this.songData.length; i++) {
      const x = width * i;
      let height =
        this.songData[i] * this.WaveCanvas.nativeElement.offsetHeight - padding;
      if (height < 0) {
        height = 0;
      } else if (height > this.WaveCanvas.nativeElement.offsetHeight / 2) {
        height = this.WaveCanvas.nativeElement.offsetHeight / 2;
      }
      this.drawLineSegment(
        ctx,
        x,
        height,
        width,
        (i + 1) % 2 === 0,
        this.initWaveColor
      );
    }
  }
  //#endregion

  //#region events
  // hover canvas change background color
  hoverBackGround(e: MouseEvent): void {
    const ctx = this.backgroundCanvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.fillStyle = this.backgroundColor;
    }
    ctx?.fillRect(
      0,
      0,
      this.backgroundCanvas.nativeElement.clientWidth,
      this.backgroundCanvas.nativeElement.height
    );
    if (ctx) {
      ctx.fillStyle = this.backgroundColorHover;
    }
    ctx?.fillRect(
      0,
      0,
      (e.offsetX * 300) / this.backgroundCanvas.nativeElement.clientWidth,
      this.backgroundCanvas.nativeElement.height
    );
  }
  // canvas clicked changes position in song
  handleCanvasClick(e: MouseEvent, duration: number): number {
    const rect = this.WaveCanvas.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    this.animationCounter = Math.round(
      x / (this.WaveCanvas.nativeElement.clientWidth / this.samples)
    );
    this.animation();
    return duration * (x / this.WaveCanvas.nativeElement.clientWidth);
  }
  handleTimeChange(timePast: number, duration: number): void {
    this.animationCounter = Math.round(this.samples * (timePast / duration));
    if (this.songData) {
      this.animation();
    }
  }
  //#endregion
}
