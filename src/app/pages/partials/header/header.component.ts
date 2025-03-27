import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  links: any[] = [
    {name: 'Home', path: '/', seeWhenAnon: true, seeWhenLogged: true}, 
    {name: 'free space', path: '/', seeWhenAnon: true, seeWhenLogged: true}, 
    {name: 'Artist List', path: '/artists', seeWhenAnon: false, seeWhenLogged: true}, 
    {name: 'Login', path: '/login', seeWhenAnon: true, seeWhenLogged: false}, 
    {name: 'Register', path: '/register', seeWhenAnon: true, seeWhenLogged: false}, 
    {name: 'Profile', path: '/profile', seeWhenAnon: false, seeWhenLogged: true}, 
    {name: 'Error', path: '/error', seeWhenAnon: true, seeWhenLogged: true}, 
    {name: 'About', path: '/about', seeWhenAnon: true, seeWhenLogged: true}, 
  ]
  private readonly authService: AuthService = inject(AuthService)
  isAuthenticated = inject(AuthService).isAuthenticated

  logOut() {
    this.authService.logOut()
  }
}
