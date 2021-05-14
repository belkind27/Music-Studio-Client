import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input() isDark!: boolean;

  isOpen!: boolean;
  facebookLink = '#';
  emailLink = '#';
  instagramLink = '#';
  spotifyLink = '#';
  whatsAppLink = '#';
  constructor() {}

  ngOnInit(): void {
    this.isOpen = false;
  }
  openMenu(): void {
    if (this.isOpen) {
      setTimeout(() => (this.isOpen = false), 500);
    } else {
      this.isOpen = true;
    }
  }
}
