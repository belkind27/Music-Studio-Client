import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { Spotlight } from 'src/app/shared/models/spotlight.model';
import { GetSpotlightsService } from '../../services/get-spotlights.service';

@Component({
  selector: 'app-spotlight-section',
  templateUrl: './spotlight-section.component.html',
  styleUrls: ['./spotlight-section.component.css'],
  providers: [GetSpotlightsService],
})
export class SpotlightSectionComponent implements OnInit {
  constructor(private service: GetSpotlightsService) {}
  @ViewChild('nav', { read: DragScrollComponent }) ds:
    | DragScrollComponent
    | undefined;
  currentSpotlight!: Spotlight;
  spotlights!: Spotlight[];
  resizeObservable$!: Observable<Event>;
  resizeSubscription$!: Subscription;
  w!: number;
  h!: number;
  imgW!: number;
  imgP!: number;

  moveLeft(): void {
    this.ds?.moveLeft();
  }
  moveRight(): void {
    this.ds?.moveRight();
  }
  ngOnInit(): void {
    this.w = window.innerWidth * 0.8;
    if (window.innerWidth > 576) {
      this.h = window.innerHeight * 0.6;
    } else {
      this.h = window.innerHeight * 0.3;
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.changeImgWidth(window.innerWidth);
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((_) => {
      this.w = window.innerWidth * 0.8;
      if (window.innerWidth > 576) {
        this.h = window.innerHeight * 0.6;
      } else {
        this.h = window.innerHeight * 0.3;
      }
      this.changeImgWidth(window.innerWidth);
    });
    this.service.getSpotlights().subscribe((spotlights) => {
      this.spotlights = spotlights;
      this.currentSpotlight = spotlights[0];
    });
  }
  onClick(spotlight: Spotlight): void {
    this.currentSpotlight = spotlight;
  }
  changeImgWidth(screenWidth: number): void {
    const idleWidth = 280;
    const divPad = 120;
    let imgPadding = 24;
    console.log(screenWidth);

    const fixedWidth = screenWidth - divPad;
    if (fixedWidth < idleWidth * 2) {
      this.imgW = idleWidth;
      imgPadding = (fixedWidth - idleWidth) / 2;
    } else {
      this.imgW =
        idleWidth -
        48 +
        (fixedWidth % idleWidth) /
          ((fixedWidth - (fixedWidth % idleWidth)) / idleWidth);
    }
    this.imgP = imgPadding;
  }
}
