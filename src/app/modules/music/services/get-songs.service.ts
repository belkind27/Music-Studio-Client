import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Song } from 'src/app/shared/models/song.model';
import { environment } from 'src/environments/environment';
@Injectable()
export class GetSongsService {
  constructor(private http: HttpClient) {}
  getSongs(): Observable<Song[]> {
    return this.http.get(environment.API_URL + 'Songs').pipe(
      map((res) => res as Song[]),
      catchError((_) => of([]))
    );
  }
}
