import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
