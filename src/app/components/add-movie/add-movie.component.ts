import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MOVIE_CREATE_FORM, MOVIE_CREATE_OPTS} from "./movie.form";
import {FilmService} from "../../services/film.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {

  form: FormGroup;

  constructor(
    builder: FormBuilder,
    private readonly $filmServ: FilmService,
    private router: Router
  ) {
    this.form = builder.group(MOVIE_CREATE_FORM, MOVIE_CREATE_OPTS);
  }

  onSubmit() {
    console.log( this.form )
    if( this.form.valid ){
      const movie = this.form.value;
      this.$filmServ.add( movie );
      this.router.navigateByUrl('/movie')
    }
  }

  get arrayControls(){
    const formArray = this.form.controls['genres'] as FormArray;
    return formArray.controls as FormControl[]
  }

  ajouterGenre() {
    const formArray = this.form.controls['genres'] as FormArray;
    formArray.push( new FormControl(null, [Validators.required]) )
  }
}
