import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../services/auth.service";
import {interval, Observable, tap} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  links: MenuItem[] = [
    {
      label: 'home',
      routerLink: 'home'
    },
    {
      label: 'movies',
      items: [
        {
          label: 'list',
          routerLink: 'movie'
        },
        {
          label: 'add',
          routerLink: 'movie/add',
        },
      ]
    },
    {
      label: 'login',
      routerLink: 'login'
    }
  ]

  showMessage = false;
  // userName: string | null = null;
  userName$: Observable<string | null>;


  constructor(private readonly $authSev: AuthService) {
    this.userName$ = this.$authSev.username$.pipe(
      tap({
        next: userName => {
          this.showMessage = true;
          console.log(userName)
          setTimeout(() => this.showMessage = false, 5_000);
        }
      })
    );
    // $authSev.connectedUser$.subscribe({
    //   next: (username) => {
    //     this.userName = username;
    //     this.showMessage = true;
    //     setTimeout( () => this.showMessage = false, 5_000 )
    //   }
    // })
  }

  get isConnected(){
    return this.$authSev.isConnected
  }

  disconnect() {
    this.$authSev.disconnect()
  }
}
