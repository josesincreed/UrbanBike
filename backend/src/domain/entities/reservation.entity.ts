export enum ReservationStatus {
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

export interface Reservation {
  id: string;
  userId: string;
  bikeId: string;

  startTime: string;      
  endTime: string | null; 

  status: ReservationStatus;

  createdAt: string;      
}