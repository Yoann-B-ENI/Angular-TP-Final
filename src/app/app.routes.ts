import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path: '', title: 'Angular ArtIC TP', component: HomeComponent}, 
    {path: 'home', title: 'Angular ArtIC TP', component: HomeComponent}, 
    {path: 'about', title: 'About Us', component: AboutComponent}, 
    {path: '**', title: 'Error', component: ErrorComponent}, 
];
