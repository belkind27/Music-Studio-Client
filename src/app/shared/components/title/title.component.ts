import { Component, Input, OnInit } from '@angular/core';
import { titleColors } from '../../models/titleColors.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input()
  titleContent!: string;
  @Input()
  titleColor!: titleColors;
  constructor() { }

  ngOnInit(): void {
  }

}
