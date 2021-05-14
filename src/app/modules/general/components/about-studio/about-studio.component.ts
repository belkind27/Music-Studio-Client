import { Component, OnInit } from '@angular/core';
import { Sections } from 'src/app/shared/directives/is-mobile.directive';
import { titleColors } from 'src/app/shared/models/titleColors.model';

@Component({
  selector: 'app-about-studio',
  templateUrl: './about-studio.component.html',
  styleUrls: ['./about-studio.component.css'],
})
export class AboutStudioComponent implements OnInit {
  title = 'About Studio';
  titleColor = titleColors.white;
  section = Sections.Studio;
  currentImg!: GalleryImg;
  isShow = false;
  headImg1 = '../../../../assets/gallery/pexels-blaz-erzetic-2426085.jpg';
  headImg2 = '../../../../assets/gallery/pexels-pixabay-164938.jpg';
  gallery!: GalleryImg[];
  constructor() {}

  ngOnInit(): void {
    this.gallery = [
      { src: this.headImg1, id: 1 },
      { src: this.headImg2, id: 2 },
      { src: this.headImg1, id: 3 },
      { src: this.headImg2, id: 4 },
      { src: this.headImg1, id: 5 },
      { src: this.headImg2, id: 6 },
    ];
  }
  open(img: GalleryImg): void {
    this.currentImg = img;
    this.isShow = true;
  }
  moveLeft(): void {
    if (this.currentImg.id === 1) {
      this.currentImg = this.gallery[5];
    } else {
      this.currentImg = this.gallery[this.currentImg.id - 2];
    }
  }
  moveRight(): void {
    if (this.currentImg.id === 6) {
      this.currentImg = this.gallery[0];
    } else {
      this.currentImg = this.gallery[this.currentImg.id];
    }
  }
  close(): void {
    this.isShow = false;
  }
}
interface GalleryImg {
  src: string;
  id: number;
}
