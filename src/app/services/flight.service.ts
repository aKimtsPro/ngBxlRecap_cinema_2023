import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Flight} from "../shared/models/flight.model";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";



@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(
    private client: HttpClient
  ) { }

  getNewPlanes(): Observable<Flight[]>{
    return this.client.get<Flight[]>('http://localhost:8080/flight/new_planes')
  }

}
