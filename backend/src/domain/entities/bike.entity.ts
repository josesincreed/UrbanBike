export enum BikeStatus {
  AVAILABLE = 'AVAILABLE',
  RESERVED = 'RESERVED',
  MAINTENANCE = 'MAINTENANCE',
}

export interface Bike {
  id: string;
  stationId: string;
  code: string; 
  status: BikeStatus;
  createdAt: Date;
  updatedAt: Date;
}