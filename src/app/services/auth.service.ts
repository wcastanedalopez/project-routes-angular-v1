import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { IRoute } from '../models/route.interface';
import { ILoginRequest } from '../models/login.interface';

const AUTH_API = 'http://localhost:8080/api/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  //Open Bootcamp
  loginReqres(email: string, password: string): Observable<any> {

    let body = {
      email: email,
      password: password
    }
    return this.http.post('https://reqres.in/api/login', body);
  }
 
}
