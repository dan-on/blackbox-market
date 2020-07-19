import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredentials } from './user-credentials.model';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signIn(credentials: UserCredentials): Observable<any> {
    return this.http.post<any>(`api/auth/local`, {
      identifier: credentials.email,
      password: credentials.password
    });
  }

  signUp(user: User): Observable<any> {
    return this.http.post<any>(`api/auth/local/register`, user);
  }
}
