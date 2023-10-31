import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailComponent } from './components/film-list/film-detail/film-detail.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import { SessionComponent } from './components/session/session.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { Page404Component } from './layout/page404/page404.component';
import {MenubarModule} from "primeng/menubar";
import {TableModule} from "primeng/table";
import { AvailablePipe } from './pipes/available.pipe';
import { AvailableDirective } from './directives/available.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmDetailComponent,
    SessionComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    AvailablePipe,
    AvailableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
