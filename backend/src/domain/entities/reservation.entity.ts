export enum ReservationStatus {
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED',
}

export interface Reservation {
  id: string;
  bikeId: string;
  userId: string;
  stationId: string;
  startTime: Date;
  endTime: Date;
  status: ReservationStatus;
  createdAt: Date;
}