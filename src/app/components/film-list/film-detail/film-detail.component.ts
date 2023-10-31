import {Component, Input} from '@angular/core';
import {Movie} from "../../../shared/models/movie.model";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent {

  @Input()
  movie!: Movie;

}
