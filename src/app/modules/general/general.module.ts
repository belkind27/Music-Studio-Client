import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutStudioComponent } from './components/about-studio/about-studio.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    WelcomeComponent,
    AboutComponent,
    AboutStudioComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    NavBarComponent,
    SideBarComponent,
    WelcomeComponent,
    AboutComponent,
    AboutStudioComponent,
  ],
})
export class GeneralModule {}
