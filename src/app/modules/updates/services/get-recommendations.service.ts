import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Recommendation } from 'src/app/shared/models/recommendation';
import { environment } from 'src/environments/environment';

@Injectable()
export class GetRecommendationsService {
  constructor(private http: HttpClient) {}
  getRecommendations(): Observable<Recommendation[]> {
    return this.http.get(environment.API_URL + 'Recommendations').pipe(
      map((res) => res as Recommendation[]),
      catchError((_) => of([]))
    );
  }
}
