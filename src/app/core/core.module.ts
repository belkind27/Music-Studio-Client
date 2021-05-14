import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDialogComponent } from './components/admin-dialog/admin-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { GeneralModule } from '../modules/general/general.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MusicModule } from '../modules/music/music.module';
import { UpdatesModule } from '../modules/updates/updates.module';

@NgModule({
  declarations: [AdminDialogComponent, AppContainerComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    MusicModule,
    BrowserAnimationsModule,
    GeneralModule,
    UpdatesModule,
  ],
  exports: [AppContainerComponent],
  entryComponents: [AdminDialogComponent],
})
export class CoreModule {}
