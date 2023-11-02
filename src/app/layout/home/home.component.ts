import {Component, OnDestroy} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  demoObs$ = interval(1000);
  demoObs$$: Subscription;

  constructor() {
    this.demoObs$$ = this.demoObs$.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.demoObs$$.unsubscribe();
  }

}
