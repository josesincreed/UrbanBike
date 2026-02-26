export interface Bike {
  id: string;
  code: string;
  status: 'AVAILABLE' | 'RESERVED';
  stationId: string;
}

export interface Station {
  id: string;
  name: string;
  city: string;
  location: string;
  capacity: number;
  bikesAvailable: Bike[];
}