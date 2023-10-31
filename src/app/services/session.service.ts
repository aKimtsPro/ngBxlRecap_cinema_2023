import { Injectable } from '@angular/core';
import {Session} from "../shared/models/session.model";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessions: Session[] = [
    {
      id: 1,
      startAt: new Date("2023-10-31T14:00:00"),
      reservedPlace: 25,
      room: {
        id: 1,
        number: 101,
        capacity: 50,
      },
      movie: {
        id: 1,
        name: "Eternal Dreams",
        director: "Christopher Nolan",
        genres: ["Science Fiction", "Drama", "Mystery"],
        duration: 150,
        img: "https://i.chzbgr.com/full/9718091520/h765670AC/glasses-p-david-cross-david-cross-blue-furious-blue-gasket-again",
      },
      reserved: true,
    },
    {
      id: 2,
      startAt: new Date("2023-11-01T16:30:00"),
      reservedPlace: 9,
      room: {
        id: 2,
        number: 102,
        capacity: 60,
      },
      movie: {
        id: 1,
        name: "Eternal Dreams",
        director: "Christopher Nolan",
        genres: ["Science Fiction", "Drama", "Mystery"],
        duration: 150,
        img: "https://i.chzbgr.com/full/9718091520/h765670AC/glasses-p-david-cross-david-cross-blue-furious-blue-gasket-again",
      },
      reserved: false,
    },
    {
      id: 6,
      startAt: new Date("2023-10-31T14:00:00"),
      reservedPlace: 50,
      room: {
        id: 1,
        number: 101,
        capacity: 50,
      },
      movie: {
        id: 1,
        name: "Eternal Dreams",
        director: "Christopher Nolan",
        genres: ["Science Fiction", "Drama", "Mystery"],
        duration: 150,
        img: "https://i.chzbgr.com/full/9718091520/h765670AC/glasses-p-david-cross-david-cross-blue-furious-blue-gasket-again",
      },
      reserved: true,
    },
    {
      id: 7,
      startAt: new Date("2023-11-01T16:30:00"),
      reservedPlace: 40,
      room: {
        id: 2,
        number: 102,
        capacity: 60,
      },
      movie: {
        id: 2,
        name: "Green Knight",
        director: "David Lowery",
        genres: ["Fantastic", "Drama"],
        duration: 120,
        img: "https://www.grignoux.be/upload/grignoux/films/1294/70x100_green-knight_be-2.jpg",
      },
      reserved: false,
    },
    {
      id: 3,
      startAt: new Date("2023-11-02T18:45:00"),
      reservedPlace: 30,
      room: {
        id: 3,
        number: 103,
        capacity: 75,
      },
      movie: {
        id: 2,
        name: "Green Knight",
        director: "David Lowery",
        genres: ["Fantastic", "Drama"],
        duration: 120,
        img: "https://www.grignoux.be/upload/grignoux/films/1294/70x100_green-knight_be-2.jpg",
      },
      reserved: true,
    },
    {
      id: 4,
      startAt: new Date("2023-11-03T19:15:00"),
      reservedPlace: 55,
      room: {
        id: 4,
        number: 104,
        capacity: 80,
      },
      movie: {
        id: 3,
        name: "The End of Evangelion",
        director: "Hideaki Anno",
        genres: ["Animation", "Drama", "Science-Fiction"],
        duration: 135,
        img: "https://img.fruugo.com/product/8/28/14436288_max.jpg",
      },
      reserved: true,
    },
    {
      id: 5,
      startAt: new Date("2023-11-04T20:00:00"),
      reservedPlace: 45,
      room: {
        id: 5,
        number: 105,
        capacity: 70,
      },
      movie: {
        id: 4,
        name: "Old Boy",
        director: "Park Chan-Wook",
        genres: ["Action", "Thriller"],
        duration: 110,
        img: "https://fr.web.img5.acsta.net/medias/nmedia/18/35/24/25/18383433.jpg",
      },
      reserved: false,
    },
  ]

  constructor() { }

  getAllFor(movieId: number) {
    return this.sessions.filter(session => session.movie.id == movieId);
  }

  reserve(sessionId: number) {
    const session = this.sessions.filter(e => e.id == sessionId)[0]
    if( !session.reserved ) {
      session.reservedPlace++;
      session.reserved = true
    }
  }

  unreserve(id: number) {
    const session = this.sessions.filter(e => e.id == id)[0]
    if( session.reserved ) {
      session.reservedPlace--;
      session.reserved = false;
    }
  }
}
