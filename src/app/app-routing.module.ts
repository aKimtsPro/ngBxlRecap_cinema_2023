import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmListComponent} from "./components/film-list/film-list.component";
import {SessionComponent} from "./components/session/session.component";
import {HomeComponent} from "./layout/home/home.component";
import {Page404Component} from "./layout/page404/page404.component";
import {AddMovieComponent} from "./components/add-movie/add-movie.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./guards/connected.guard";
import {SessionResolver} from "./core/resolver.resolver";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard(false)] },
  {
    path: 'movie',
    children: [
      { path: '', component: FilmListComponent },
      { path: 'add', component: AddMovieComponent, canActivate: [AuthGuard(true)] },
      { path: ':id/session', component: SessionComponent, resolve: { session: SessionResolver } },
    ]
  },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
