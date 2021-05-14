import { Component, OnInit } from '@angular/core';
import { Sections } from 'src/app/shared/directives/is-mobile.directive';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  section = Sections.Welcome;
  constructor() {}

  ngOnInit(): void {}
}
