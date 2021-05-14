import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Spotlight } from 'src/app/shared/models/spotlight.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class GetSpotlightsService {
  constructor(private http: HttpClient) {}
  getSpotlights(): Observable<Spotlight[]> {
    return this.http.get(environment.API_URL + 'Spotlights').pipe(
      map((res) => {
        return res as Spotlight[];
      }),
      catchError((_) => of([]))
    );
  }
}
