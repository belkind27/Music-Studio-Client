import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable()
export class ScrollHandlerService {
  constructor(
    private renderer: Renderer2,
    private deviceService: DeviceDetectorService
  ) {}
  darkSubject$: Subject<boolean> = new Subject();
  private isDark = false;

  // init listening to scroll events
  init(ref: ElementRef): void {
    this.renderer.listen('window', 'load', (e) => {
      const flagsRec = this.getFlags();
      if (!this.deviceService.isMobile()) {
        this.changeBackground(flagsRec, ref);
      } else {
        this.renderer.setStyle(
          ref.nativeElement.ownerDocument.body,
          'background',
          `black`
        );
      }
    });
    this.renderer.listen('window', 'scroll', (e) => {
      const flagsRec = this.getFlags();
      this.checkDark(flagsRec);
      if (!this.deviceService.isMobile()) {
        this.changeBackground(flagsRec, ref);
      } else {
        this.renderer.setStyle(
          ref.nativeElement.ownerDocument.body,
          'background',
          `black`
        );
      }
    });
  }

  // checks if background photo or not and change nav bar color accordingly
  private checkDark(flagsRec: DOMRect[]): void {
    let counter = 0;
    flagsRec.forEach((rec) => {
      if (rec.top < 0) {
        counter++;
      }
    });
    if (counter % 2 === 0) {
      if (this.isDark) {
        this.isDark = false;
        this.darkSubject$.next(false);
      }
    } else {
      if (!this.isDark) {
        this.isDark = true;
        this.darkSubject$.next(true);
      }
    }
  }

  // changes photo background according to page location
  private changeBackground(flagsRec: DOMRect[], ref: ElementRef): void {
    const bg1 =
      './assets/background-images/mike-benna-SBiVq9eWEtQ-unsplash.jpg';
    const bg2 = './assets/background-images/pexels-nate-1036657.jpg';
    const bg3 = './assets/background-images/sean-o-KMn4VEeEPR8-unsplash.jpg';
    if (flagsRec[2].top < 0) {
      this.renderer.setStyle(
        ref.nativeElement.ownerDocument.body,
        'background',
        `url('${bg3}') no-repeat center center fixed`
      );
    } else {
      if (flagsRec[0].top < 0) {
        this.renderer.setStyle(
          ref.nativeElement.ownerDocument.body,
          'background',
          `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${bg2}) no-repeat center center fixed`
        );
      } else {
        this.renderer.setStyle(
          ref.nativeElement.ownerDocument.body,
          'background',
          `url('${bg1}') no-repeat center center fixed`
        );
      }
    }
    this.renderer.setStyle(
      ref.nativeElement.ownerDocument.body,
      'backgroundSize',
      'cover'
    );
    this.renderer.setStyle(
      ref.nativeElement.ownerDocument.body,
      'webkitBackgroundSize',
      'cover'
    );
  }

  // getting position flags from document
  private getFlags(): DOMRect[] {
    const flags = document.getElementsByClassName('nav-color-flag');
    const flagsRec: DOMRect[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < flags.length; index++) {
      flagsRec.push(flags[index].getBoundingClientRect());
    }
    return flagsRec;
  }
}
