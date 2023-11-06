import {ResolveFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {SessionService} from "../services/session.service";
import {Session} from "../shared/models/session.model";
import {tap} from "rxjs";

export const SessionResolver: ResolveFn<Session[]> = (route, state) => {
  const movieId = parseInt(route.params['id']);
  const $sessionServ = inject( SessionService );
  const $router = inject(Router);
  return $sessionServ.getAllFor(movieId).pipe(
    tap({ error: () => {
      //
      // console.log('par ici')
      // $router.navigateByUrl('/home')
      } })
  );
};
