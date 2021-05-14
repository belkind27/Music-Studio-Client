import { Component, OnInit } from '@angular/core';
import { titleColors } from 'src/app/shared/models/titleColors.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  title = 'About Me';
  titleColor = titleColors.black;
  constructor() {}

  ngOnInit(): void {}
}
