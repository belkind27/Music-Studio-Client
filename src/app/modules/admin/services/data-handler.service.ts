import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AdminTokenService } from 'src/app/core/services/admin-token.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataHandlerService {
  constructor(
    private http: HttpClient,
    private tokenService: AdminTokenService
  ) {}
  getData<T>(data: string): Observable<T[]> {
    return this.http.get(environment.API_URL + data).pipe(
      map((res) => res as T[]),
      catchError((_) => of([]))
    );
  }
  postData<T>(model: string, data: T): Observable<T[]> {
    const authHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.tokenService.getToken());
    return this.http
      .post(environment.API_URL + model, data, { headers: authHeaders })
      .pipe(
        map((res) => res as T[]),
        catchError((_) => of([]))
      );
  }
  editData<T>(model: string, data: T): Observable<T[]> {
    const authHeaders = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.tokenService.getToken()
    );
    return this.http
      .put(environment.API_URL + model, data, { headers: authHeaders })
      .pipe(
        map((res) => res as T[]),
        catchError((_) => of([]))
      );
  }
  deleteData<T>(model: string, id: number): Observable<T[]> {
    const authHeaders = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.tokenService.getToken()
    );
    return this.http
      .delete(environment.API_URL + `${model}/${id}`, { headers: authHeaders })
      .pipe(
        map((res) => res as T[]),
        catchError((_) => of([]))
      );
  }
}
