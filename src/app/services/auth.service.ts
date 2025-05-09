import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AuthApiResponse } from '../models/auth-api-response';
import { SessionStorageService } from './session-storage.service';
import { User } from '../models/user';
import { newUser } from '../models/new-user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_URL = environment.auth_api
  private readonly http: HttpClient = inject(HttpClient)
  private readonly seshService: SessionStorageService = inject(SessionStorageService)

  private isAuthenticatedSignal = signal<boolean>(
    this.seshService.get('userToken') != null && 
    this.seshService.get('userToken') != undefined && 
    this.seshService.get('userToken') != ''
  )
  isAuthenticated = computed(() => this.isAuthenticatedSignal())

  private router: Router = inject(Router)

  constructor() { }

  tryToLogin(email: string | null, password: string | null) {
    const body = {email: email, password: password}
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post<AuthApiResponse<string>>(this.AUTH_URL+"/login", body, {headers})
  }

  tryToLoginObserved(email: string | null, password: string | null){
    return this.tryToLogin(email, password).subscribe({
      next: (response: AuthApiResponse<string>) => {
        if (response.code == '200'){
          this.setToken(response.data)
          this.router.navigate(['home'])
        }
      },
      error: (error: Error) => {console.error(error);}
    })
  }

  //TODO what do we do with the JWT token?
  setToken(token: string){
    this.seshService.set('userToken', token)
    this.isAuthenticatedSignal.set(true)
  }

  logOut(){
    this.seshService.clear()
    this.isAuthenticatedSignal.set(false)
    this.router.navigate(['home'])
  }
  
  tryToRegister(newUser: newUser) {
    const body = JSON.stringify(newUser)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post<AuthApiResponse<User>>(this.AUTH_URL+"/signup", body, {headers})
  }

  //TODO put the auto-login into a pipe/rxjs something
  //TODO use the user data in response.data for something?
  tryToRegisterObserved(newUser: newUser){
    return this.tryToRegister(newUser).subscribe({
      next: (response: AuthApiResponse<User>) => {
        if (response.code == '200'){
          this.tryToLoginObserved(response.data.email, response.data.password)
        }
      },
      error: (error: Error) => {console.error(error);}
    })
  }



}
