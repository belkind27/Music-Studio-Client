import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Directive({
  selector: '[appIsMobile]',
})
export class IsMobileDirective {
  @Input() set section(section: Sections) {
    this.checkIfMobile(section);
  }
  constructor(
    private ref: ElementRef,
    private deviceService: DeviceDetectorService,
    private renderer: Renderer2
  ) {}
  // checks if mobile and change photo display
  checkIfMobile(section: Sections): void {
    const bg1 =
      './assets/background-images/mike-benna-SBiVq9eWEtQ-unsplash.jpg';
    const bg2 = './assets/background-images/AboutAmit.jpg';
    const bg3 = './assets/background-images/sean-o-KMn4VEeEPR8-unsplash.jpg';
    if (this.deviceService.isMobile()) {
      switch (section) {
        case Sections.Studio:
          this.renderer.setStyle(
            this.ref.nativeElement,
            'backgroundImage',
            `url('${bg2}'`
          );
          break;
        case Sections.Welcome:
          this.renderer.setStyle(
            this.ref.nativeElement,
            'backgroundImage',
            `url('${bg1}')`
          );
          break;
        case Sections.Updates:
          this.renderer.setStyle(
            this.ref.nativeElement,
            'backgroundImage',
            `url('${bg3}')`
          );
          break;
        default:
          break;
      }
      this.renderer.setStyle(this.ref.nativeElement, 'backgroundSize', 'cover');
      this.renderer.setStyle(
        this.ref.nativeElement,
        'backgroundPosition',
        'center'
      );
      this.renderer.setStyle(
        this.ref.nativeElement,
        'backgroundRepeat',
        'no repeat'
      );

      this.renderer.setStyle(
        this.ref.nativeElement,
        'webkitBackgroundSize',
        'cover'
      );
    }
  }
}
export enum Sections {
  'Studio',
  'Welcome',
  'Updates',
}
