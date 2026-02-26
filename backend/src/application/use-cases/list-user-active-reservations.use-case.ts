import { Inject, Injectable } from '@nestjs/common';

import { Reservation } from '../../domain/entities/reservation.entity';
import type { ReservationRepository } from '../../domain/repositories/reservation.repository.interface';

@Injectable()
export class ListUserActiveReservationsUseCase {
  constructor(
    @Inject('ReservationRepository')
    private readonly reservationRepository: ReservationRepository,
  ) {}

  async execute(userId: string): Promise<Reservation[]> {
    return this.reservationRepository.findActiveByUser(userId);
  }
}