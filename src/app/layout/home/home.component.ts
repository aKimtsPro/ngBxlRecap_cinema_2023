import {Component, OnDestroy} from '@angular/core';
import {EMPTY, interval, Observable, Subscription} from "rxjs";
import {FlightService} from "../../services/flight.service";
import {Flight} from "../../shared/models/flight.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  demoObs$ = EMPTY//interval(1000);
  demoObs$$: Subscription;
  flights$: Observable<Flight[]>

  constructor(
    private readonly $flightServ: FlightService
  ) {
    this.demoObs$$ = this.demoObs$.subscribe((data) => console.log(data));
    this.flights$ = this.$flightServ.getNewPlanes();
  }

  ngOnDestroy(): void {
    this.demoObs$$.unsubscribe();
  }

}
