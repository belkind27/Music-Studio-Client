import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
export enum playlistEvents {
  'backwards',
  'forward',
  'stand',
}

@Injectable({
  providedIn: 'root',
})
export class PlaylistControlService {
  private subject$ = new Subject<playlistEvents>();
  currentSongId!: number;
  emit(event: playlistEvents): void {
    this.subject$.next(event);
  }
  on(event: playlistEvents, action: any): Subscription {
    return this.subject$
      .pipe(filter((e: playlistEvents) => e === event))
      .subscribe(action);
  }
  constructor() {}
}
