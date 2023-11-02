import { Injectable } from '@angular/core';

const AUTH_KEY = 'connectedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {
    username: 'user',
    password: 'pass'
  }

  constructor() { }

  connect(username: string, password: string): boolean{
    if( !this.isConnected && this.user.username == username && this.user.password == password ){
      this.connectedUser = this.user.username;
      return true;
    }
    return false;
  }

  disconnect(){
    if( this.isConnected )
      this.connectedUser = null;
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

}
