import { Injectable } from '@angular/core';
import {Session} from "../shared/models/session.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Movie} from "../shared/models/movie.model";
import {Resolve, ResolveFn} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly BASE_URL = 'http://localhost:3000/session/afpenfpanfaepifapb' // TODO repair
  constructor(private client: HttpClient) { }

  getAllFor(movieId: number) {
    return this.client.get<Session[]>(this.BASE_URL, {
      params: {'movie.id': movieId}
    })
  }

  reserve(sessionId: number) {
    // const session = this.sessions.filter(e => e.id == sessionId)[0]
    // if( !session.reserved ) {
    //   session.reservedPlace++;
    //   session.reserved = true
    // }
    return this.client.patch<Movie>(this.BASE_URL+'/'+sessionId, { reserved: true })
  }

  unreserve(sessionId: number) {
    // const session = this.sessions.filter(e => e.id == id)[0]
    // if( session.reserved ) {
    //   session.reservedPlace--;
    //   session.reserved = false;
    // }
    return this.client.patch<Movie>(this.BASE_URL+'/'+sessionId, { reserved: false })
  }

}
