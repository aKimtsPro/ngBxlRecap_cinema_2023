import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export function AuthGuard(shouldBeConnected: boolean): CanActivateFn {
  return shouldBeConnected ? connectedGuard : disconnectedGuard;
}

const connectedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isConnected;
};

const disconnectedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return !authService.isConnected;
}
