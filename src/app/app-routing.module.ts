import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmListComponent} from "./components/film-list/film-list.component";
import {SessionComponent} from "./components/session/session.component";
import {HomeComponent} from "./layout/home/home.component";
import {Page404Component} from "./layout/page404/page404.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movie', component: FilmListComponent },
  { path: 'movie/:id/session', component: SessionComponent },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
