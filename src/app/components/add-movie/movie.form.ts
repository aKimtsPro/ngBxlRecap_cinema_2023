import {AbstractControl, FormArray, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

const nameDirectorValidator: ValidatorFn =  (control: AbstractControl) : ValidationErrors | null => {

  const group = control as FormGroup;
  const name = group.value.name;
  const director = group.value.director;

  if( !name || name.includes(director) )
    return null;

  return {
    nameDirector: 'name should include director\'s name'
  }
}

export const MOVIE_CREATE_FORM= {
  'id': [null, [ Validators.required, Validators.min(1) ] ],
  'name': [null, [ Validators.required, Validators.minLength(5), Validators.maxLength(20) ] ],
  'director': [null, [ Validators.required ]],
  'genres': new FormArray([]),
  'duration': [120, [ Validators.required, Validators.min(60), Validators.max(200) ]],
  'img': [null, [ Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/) ]],
}


export const MOVIE_CREATE_OPTS = {
  validators: [nameDirectorValidator]
}



