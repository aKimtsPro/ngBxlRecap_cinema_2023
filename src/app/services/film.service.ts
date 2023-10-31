import { Injectable } from '@angular/core';
import {Movie} from "../shared/models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private _movies: Movie[] = [
    {
      id: 1,
      name: "Eternal Dreams",
      director: "Christopher Nolan",
      genres: ["Science Fiction", "Drama", "Mystery"],
      duration: 150,
      img: "https://i.chzbgr.com/full/9718091520/h765670AC/glasses-p-david-cross-david-cross-blue-furious-blue-gasket-again",
    },
    {
      id: 2,
      name: "Green Knight",
      director: "David Lowery",
      genres: ["Fantastic", "Drama"],
      duration: 120,
      img: "https://www.grignoux.be/upload/grignoux/films/1294/70x100_green-knight_be-2.jpg",
    },
    {
      id: 3,
      name: "The End of Evangelion",
      director: "Hideaki Anno",
      genres: ["Animation", "Drama", "Science-Fiction"],
      duration: 135,
      img: "https://img.fruugo.com/product/8/28/14436288_max.jpg",
    },
    {
      id: 4,
      name: "Old Boy",
      director: "Park Chan-Wook",
      genres: ["Action", "Thriller"],
      duration: 110,
      img: "https://fr.web.img5.acsta.net/medias/nmedia/18/35/24/25/18383433.jpg",
    },
    {
      id: 5,
      name: "Okja",
      director: "Bong Joon Ho",
      genres: ["Science Fiction", "Thriller", "Drama"],
      duration: 160,
      img: "https://fr.web.img4.acsta.net/pictures/17/05/13/10/06/039567.jpg",
    },
  ];

  constructor() { }

  getAll(){
    return [...this._movies];
  }

  add(movie: Movie) {
    this._movies.push(movie);
  }
}
