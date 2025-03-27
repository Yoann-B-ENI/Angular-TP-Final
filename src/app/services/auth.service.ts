import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AuthApiResponse } from '../models/auth-api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_URL = environment.auth_api
  private readonly http: HttpClient = inject(HttpClient)

  userToken: string = ''

  constructor() { }

  tryToLogin(email: string | null, password: string | null) {
    const body = {email: email, password: password}
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post<AuthApiResponse<string>>(this.AUTH_URL+"/login", body, {headers})
  }

  setToken(token: string){
    this.userToken = token
  }

  currentlyLoggedIn(){
    return this.userToken != ''
  }
  
}
