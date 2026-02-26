import { Bike } from '../entities/bike.entity';

export interface BikeRepository {
  create(bike: Bike): Promise<void>;
  findById(id: string): Promise<Bike | null>;
  findAll(): Promise<Bike[]>;
  findAvailableByStation(stationId: string): Promise<Bike[]>;
  update(bike: Bike): Promise<void>;
  delete(id: string): Promise<void>;
}