import { Injectable } from '@angular/core';
import {Movie} from "../shared/models/movie.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private readonly BASE_URL = 'http://localhost:3000/movie';

  constructor(private client: HttpClient) { }

  getAll(): Observable<Movie[]>{
    return this.client.get<Movie[]>(this.BASE_URL);
  }

  add(movie: Movie): Observable<Movie> {
    return this.client.post<Movie>(this.BASE_URL, movie);
  }

}
