import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";

const AUTH_KEY = 'connectedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {
    username: 'user',
    password: 'pass'
  }

  private _connectedUser$ = new BehaviorSubject<string | null>( this.connectedUser );

  constructor() {}

  connect(username: string, password: string): boolean{
    if( !this.isConnected && this.user.username == username && this.user.password == password ){
      this.connectedUser = this.user.username;
      this._connectedUser$.next( this.connectedUser );
      return true;
    }
    return false;
  }

  disconnect(){
    if( this.isConnected ) {
      this.connectedUser = null;
      this._connectedUser$.next( this.connectedUser );
    }
  }

  get isConnected(): boolean {
    // !!undefined  -> false
    // !!'user'     -> true
    return !!this.connectedUser;
  }

  get connectedUser(): string | null {
    return localStorage.getItem(AUTH_KEY);
  }

  private set connectedUser(user: string | null){
    if( user )
      localStorage.setItem(AUTH_KEY, user);
    else
      localStorage.removeItem(AUTH_KEY);
  }

  get connectedUser$(): Observable<string | null>{
    return this._connectedUser$.pipe(
      tap(console.log)
    );
  }

}
