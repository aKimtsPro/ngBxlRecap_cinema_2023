import { Pipe, PipeTransform } from '@angular/core';
import {Session} from "../shared/models/session.model";

@Pipe({
  name: 'available',
  pure: false
})
export class AvailablePipe implements PipeTransform {

  transform(session: Session): string | number {
    const placeLeft = session.room.capacity - session.reservedPlace;
    return (placeLeft > 0) ? placeLeft : 'unavailable';
  }

}
