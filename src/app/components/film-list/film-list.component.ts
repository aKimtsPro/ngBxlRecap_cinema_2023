import { Component } from '@angular/core';
import {Movie} from "../../shared/models/movie.model";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent {

  movies: Movie[]

  constructor(
    private readonly $movieServ: FilmService
  ) {
    this.movies = $movieServ.getAll();
    console.log(this.movies)
  }

}
