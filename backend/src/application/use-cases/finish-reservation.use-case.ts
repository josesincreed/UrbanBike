import {
  Inject,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import {
  Reservation,
  ReservationStatus,
} from '../../domain/entities/reservation.entity';

import { BikeStatus } from '../../domain/entities/bike.entity';

import type { ReservationRepository } from '../../domain/repositories/reservation.repository.interface';
import type { BikeRepository } from '../../domain/repositories/bike.repository.interface';

@Injectable()
export class FinishReservationUseCase {
  constructor(
    @Inject('ReservationRepository')
    private readonly reservationRepository: ReservationRepository,

    @Inject('BikeRepository')
    private readonly bikeRepository: BikeRepository,
  ) {}

  async execute(reservationId: string): Promise<Reservation> {
    const reservation =
      await this.reservationRepository.findById(reservationId);

    if (!reservation) {
      throw new NotFoundException('Reservation not found');
    }

    if (reservation.status !== ReservationStatus.ACTIVE) {
      throw new BadRequestException(
        'Reservation is already finished',
      );
    }

    const now = new Date().toISOString();

    //  Update reservation
    reservation.status = ReservationStatus.FINISHED;
    reservation.endTime = now;

    await this.reservationRepository.update(reservation);

    //  Update bike back to AVAILABLE
    const bike = await this.bikeRepository.findById(
      reservation.bikeId,
    );

    if (bike) {
      bike.status = BikeStatus.AVAILABLE;
      bike.updatedAt = now;

      await this.bikeRepository.update(bike);
    }

    return reservation;
  }
}