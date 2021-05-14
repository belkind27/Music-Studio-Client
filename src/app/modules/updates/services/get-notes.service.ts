import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Note } from 'src/app/shared/models/note';
import { environment } from 'src/environments/environment';

@Injectable()
export class GetNotesService {
  constructor(private http: HttpClient) {}
  getNotes(): Observable<Note[]> {
    return this.http.get(environment.API_URL + 'Notes').pipe(
      map((res) => res as Note[]),
      catchError((_) => of([]))
    );
  }
}
