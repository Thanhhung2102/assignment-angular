import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API = ` http://localhost:3000`;

  constructor(private httpClient: HttpClient) {}

  signup(user: IUser): Observable<IUser[]> {
    return this.httpClient.post<IUser[]>(`${this.API}/signup`, user);
  }
  signin(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(`${this.API}/signin`, user);
  }
}
