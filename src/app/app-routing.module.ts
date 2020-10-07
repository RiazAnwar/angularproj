import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'person', component: PersonListComponent},
  {path: 'Movies', component: MoviesComponent},
  {path: 'Login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
