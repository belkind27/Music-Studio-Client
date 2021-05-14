import { Component, OnInit } from '@angular/core';
import { Sections } from 'src/app/shared/directives/is-mobile.directive';
import { titleColors } from 'src/app/shared/models/titleColors.model';

@Component({
  selector: 'app-updates-main',
  templateUrl: './updates-main.component.html',
  styleUrls: ['./updates-main.component.css'],
})
export class UpdatesMainComponent implements OnInit {
  title = 'What Im Doing Now?';
  titleColor = titleColors.white;
  section = Sections.Updates;

  constructor() {}

  ngOnInit(): void {}
}
