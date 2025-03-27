import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  links: any[] = [
    {name: 'Home', path: '/'}, 
    {name: 'free space', path: '/'}, 
    {name: 'free space', path: '/'}, 
    {name: 'Login', path: '/login'}, 
    {name: 'Register', path: '/register'}, 
    {name: 'Profile', path: '/profile'}, 
    {name: 'Logout', path: '/logout'}, 
    {name: 'Error', path: '/error'}, 
    {name: 'About', path: '/about'}, 
  ]
}
