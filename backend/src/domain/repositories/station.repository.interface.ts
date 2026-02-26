import { Station } from '../entities/station.entity';

export interface StationRepository {
  create(station: Station): Promise<void>;
  findById(id: string): Promise<Station | null>;
  findAll(): Promise<Station[]>;
}