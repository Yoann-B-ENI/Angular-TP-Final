import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AuthApiResponse } from '../models/auth-api-response';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_URL = environment.auth_api
  private readonly http: HttpClient = inject(HttpClient)
  private readonly seshService: SessionStorageService = inject(SessionStorageService)

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
    this.seshService.set('userToken', token)
    this.isAuthenticatedSignal.set(true)
  }

  logOut(){
    this.seshService.clear()
    this.isAuthenticatedSignal.set(false)
  }
  
}
