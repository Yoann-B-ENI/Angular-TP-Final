import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AuthApiResponse } from '../models/auth-api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_URL = environment.auth_api
  private readonly http: HttpClient = inject(HttpClient)

  userToken: string = '' //TODO use for something?

  private isAuthenticatedSignal = signal<boolean>(false)
  isAuthenticated = computed(() => this.isAuthenticatedSignal())

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
    this.isAuthenticatedSignal.set(true)
  }

  logOut(){
    this.userToken = ''
    this.isAuthenticatedSignal.set(false)
  }
  
}
