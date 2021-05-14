import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DataHandlerService } from './services/data-handler.service';
import { FormsModule } from '@angular/forms';
import { SongFormComponent } from './components/song-form/song-form.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { SpotlightFormComponent } from './components/spotlight-form/spotlight-form.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { RecommendetionFormComponent } from './components/recommendetion-form/recommendetion-form.component';

@NgModule({
  declarations: [
    AdminMainComponent,
    DataTableComponent,
    ModelFormComponent,
    SongFormComponent,
    NoteFormComponent,
    RecommendetionFormComponent,
    SpotlightFormComponent,
  ],
  imports: [CommonModule, SharedModule, HttpClientModule, FormsModule],
  exports: [AdminMainComponent],
  providers: [DataHandlerService],
})
export class AdminModule {}
