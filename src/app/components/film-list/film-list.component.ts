import { Component } from '@angular/core';
import {Movie} from "../../shared/models/movie.model";
import {FilmService} from "../../services/film.service";
import {delay, elementAt, filter, map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent {

  movies$: Observable<Movie[]>

  constructor(
    private readonly $movieServ: FilmService
  ) {
    // this.$movieServ.getAll().pipe(
    //   delay(1_000)
    // ).subscribe(data => this.movies = data)
    this.movies$ = this.$movieServ.getAll().pipe(delay(1_000));
  }

}
