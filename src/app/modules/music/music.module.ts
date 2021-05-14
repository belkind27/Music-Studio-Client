import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAdapterPipe } from './pipes/time-adapter.pipe';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CommentPopupComponent } from './components/comment-popup/comment-popup.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { CommentTableComponent } from './components/comment-table/comment-table.component';
import { MusicMainComponent } from './components/music-main/music-main.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { MusicPlayerContainerComponent } from './components/music-player-container/music-player-container.component';
import { PlayerComponent } from './components/player/player.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PopupComponent } from './components/popup/popup.component';
import { SpotlightSectionComponent } from './components/spotlight-section/spotlight-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SetHeadersInterceptor } from 'src/app/core/interceptors/set-headers.interceptor';
import { SpotlightVerticalBarComponent } from './components/spotlight-vertical-bar/spotlight-vertical-bar.component';
import { SpotlightHorizontalBarComponent } from './components/spotlight-horizontal-bar/spotlight-horizontal-bar.component';

@NgModule({
  declarations: [
    MusicPlayerContainerComponent,
    MusicPlayerComponent,
    CommentSectionComponent,
    PlayerComponent,
    TimeAdapterPipe,
    MusicMainComponent,
    CommentPopupComponent,
    CommentTableComponent,
    PlaylistComponent,
    PopupComponent,
    SpotlightSectionComponent,
    SpotlightVerticalBarComponent,
    SpotlightHorizontalBarComponent,
  ],
  imports: [
    CommonModule,
    PickerModule,
    FormsModule,
    YouTubePlayerModule,
    DragScrollModule,
    SharedModule,
    HttpClientModule,
  ],
  exports: [MusicMainComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetHeadersInterceptor,
      multi: true,
    },
  ],
})
export class MusicModule {}
