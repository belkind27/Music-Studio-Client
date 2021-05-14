import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AdminLoginService {
  constructor(private http: HttpClient) {}
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  login(name: string, password: string): Observable<any> {
    return this.http
      .post(
        environment.API_URL + 'Login',
        {
          Name: name,
          Password: password,
        },
        { headers: this.headers }
      )
      .pipe(map((res) => res as any));
  }
}
