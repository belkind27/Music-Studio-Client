import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { IsMobileDirective } from './directives/is-mobile.directive';

@NgModule({
  declarations: [TitleComponent, IsMobileDirective],
  imports: [CommonModule],
  exports: [TitleComponent, IsMobileDirective],
})
export class SharedModule {}
