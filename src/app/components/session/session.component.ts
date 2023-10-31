import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SessionService} from "../../services/session.service";
import {Session} from "../../shared/models/session.model";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent {

  sessions!: Session[];
  private filmId: number;

  constructor(
    route: ActivatedRoute,
    private readonly $sessionServ: SessionService
  ) {
    this.filmId = route.snapshot.params['id'];
    this.loadSessions()
  }

  reserve(id: number) {
    this.$sessionServ.reserve(id);
    this.loadSessions();
  }

  unreserve(id: number) {
    this.$sessionServ.unreserve(id);
    this.loadSessions();
  }

  loadSessions(){
    this.sessions = this.$sessionServ.getAllFor(this.filmId);
  }
  calculatePlaceLeft(session:Session): number {
    return session.room.capacity - session.reservedPlace;
  }
}
