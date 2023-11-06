export interface Flight {
  id: number;
  departure: string;
  arrival: string;
  price: number;
  cancelled: boolean;
  airplane: {
    id: number;
    serialNumber: string;
  };
  pilot: {
    id: number;
    firstname: string;
    lastname: string;
  };
  origin: {
    id: number;
    nom: string;
    address: string;
  };
  destination: {
    id: number;
    nom: string;
    address: string;
  };
}
