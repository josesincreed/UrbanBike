import { Reservation } from '../entities/reservation.entity';

export interface ReservationRepository {
  create(reservation: Reservation): Promise<void>;
  findById(id: string): Promise<Reservation | null>;
  findActiveByUser(userId: string): Promise<Reservation[]>;
  update(reservation: Reservation): Promise<void>;
}