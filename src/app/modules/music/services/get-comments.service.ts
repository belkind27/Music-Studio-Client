import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comment } from 'src/app/shared/models/comment.model';
@Injectable()
export class GetCommentsService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}
  addComment(comment: Comment): Observable<Comment[]> {
    return this.http
      .post(environment.API_URL + 'Comments', comment, {
        headers: this.headers,
      })
      .pipe(
        map((res) => res as Comment[]),
        catchError((_) => of([]))
      );
  }
  getComments(): Observable<Comment[]> {
    return this.http.get(environment.API_URL + 'Comments').pipe(
      map((res) => res as Comment[]),
      catchError((_) => of([]))
    );
  }
}
