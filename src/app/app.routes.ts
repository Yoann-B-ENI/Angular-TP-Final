import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { ArtistComponent } from './pages/artist/artist.component';

export const routes: Routes = [
    {path: '', title: 'Angular ArtIC TP', component: HomeComponent}, 
    {path: 'home', title: 'Angular ArtIC TP', component: HomeComponent}, 
    {path: 'about', title: 'About Us', component: AboutComponent}, 
    {path: 'login', title: 'Log In', component: LoginComponent}, 
    {path: 'register', title: 'Register', component: RegisterComponent}, 
    {path: 'profile', title: 'Profile', component: ProfileComponent}, 
    {path: 'artists/:id', title: 'Artist', component: ArtistComponent}, 
    {path: 'artists', title: 'Artists', component: ArtistsComponent}, 
    {path: '**', title: 'Error', component: ErrorComponent}, 
];
