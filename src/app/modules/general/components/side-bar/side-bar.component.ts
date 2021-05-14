import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('openCloseMenu', [
      state(
        'open',
        style({
          left: '0px',
        })
      ),
      state(
        'closed',
        style({
          left: '-150px',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
    trigger('openCloseBtn', [
      state(
        'open',
        style({
          left: '150px',
        })
      ),
      state(
        'closed',
        style({
          left: '0px',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class SideBarComponent implements OnInit {
  @Input() isServerLoad!: boolean;
  isShown!: boolean;
  constructor() {
    this.isShown = false;
  }

  ngOnInit(): void {}
  btnClick(): void {
    this.isShown ? (this.isShown = false) : (this.isShown = true);
  }
}
