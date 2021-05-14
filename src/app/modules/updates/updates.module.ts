import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdatesMainComponent } from './components/updates-main/updates-main.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { RecommendationContainerComponent } from './components/recommendation-container/recommendation-container.component';
import { NotesComponent } from './components/notes/notes.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ShortContentPipe } from './pipes/short-content.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { NoteDisplayComponent } from './components/note-display/note-display.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SetHeadersInterceptor } from 'src/app/core/interceptors/set-headers.interceptor';


@NgModule({
  declarations: [
    UpdatesMainComponent,
    NotesContainerComponent,
    RecommendationContainerComponent,
    NotesComponent,
    ShortContentPipe,
    NoteDisplayComponent,
    RecommendationsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    DragScrollModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  exports: [UpdatesMainComponent],
  entryComponents: [NoteDisplayComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetHeadersInterceptor,
      multi: true,
    },
  ],
})
export class UpdatesModule {}
