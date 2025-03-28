import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { ArtworkComponent } from './pages/artwork/artwork.component';
import { authGuard } from './guards/auth.guard';
import { anonGuard } from './guards/anon.guard';

export const routes: Routes = [
    {path: '', title: 'Angular ArtIC TP', component: HomeComponent}, 
    {path: 'home', title: 'Angular ArtIC TP', component: HomeComponent}, 
    {path: 'about', title: 'About Us', component: AboutComponent}, 
    {path: 'login', title: 'Log In', component: LoginComponent, canActivate: [anonGuard]}, 
    {path: 'register', title: 'Register', component: RegisterComponent, canActivate: [anonGuard]}, 
    {path: 'profile', title: 'Profile', component: ProfileComponent, canActivate: [authGuard]}, 
    {path: 'artists', children: [
        {path: '', title: 'Artist List', component: ArtistsComponent}, 
        {path: ':id', title: 'Artist', component: ArtistComponent}
    ], canActivate: [authGuard]}, 
    {path: 'artworks', children: [
        {path: '', title: 'Artwork List', component: AboutComponent}, 
        {path: ':id', title: 'Artwork', component: ArtworkComponent}
    ], canActivate: [authGuard]}, 
    {path: '**', title: 'Error', component: ErrorComponent}, 
];
