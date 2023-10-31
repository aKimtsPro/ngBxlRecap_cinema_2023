import {Room} from "./room.model";
import {Movie} from "./movie.model";

export interface Session{
  id: number,
  startAt: Date,
  reservedPlace: number,
  room: Room,
  movie: Movie,
  reserved: boolean
}
