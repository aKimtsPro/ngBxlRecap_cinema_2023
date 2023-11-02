import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../services/auth.service";

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

  constructor(private readonly $authSev: AuthService) {
  }

  get isConnected(){
    return this.$authSev.isConnected
  }

  disconnect() {
    this.$authSev.disconnect()
  }
}
