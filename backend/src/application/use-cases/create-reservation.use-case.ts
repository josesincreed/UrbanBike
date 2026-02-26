import {
  Inject,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { randomUUID } from 'crypto';

import {
  Reservation,
  ReservationStatus,
} from '../../domain/entities/reservation.entity';

import { BikeStatus } from '../../domain/entities/bike.entity';

import type { ReservationRepository } from '../../domain/repositories/reservation.repository.interface';
import type { BikeRepository } from '../../domain/repositories/bike.repository.interface';
import type { UserRepository } from '../../domain/repositories/user.repository.interface';

import { CreateReservationDto } from '../dtos/create-reservation.dto';

@Injectable()
export class CreateReservationUseCase {
  constructor(
    @Inject('ReservationRepository')
    private readonly reservationRepository: ReservationRepository,

    @Inject('BikeRepository')
    private readonly bikeRepository: BikeRepository,

    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async execute(dto: CreateReservationDto): Promise<Reservation> {
    // Validate user
    const user = await this.userRepository.findById(dto.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Validate bike
    const bike = await this.bikeRepository.findById(dto.bikeId);
    if (!bike) {
      throw new NotFoundException('Bike not found');
    }

    // Check availability
    if (bike.status !== BikeStatus.AVAILABLE) {
      throw new BadRequestException('Bike is not available');
    }

    // Create reservation
    const now = new Date().toISOString();

    const reservation: Reservation = {
      id: randomUUID(),
      userId: dto.userId,
      bikeId: dto.bikeId,
      startTime: now,
      endTime: null,
      status: ReservationStatus.ACTIVE,
      createdAt: now,
    };

    await this.reservationRepository.create(reservation);

    // Update bike status
    bike.status = BikeStatus.RESERVED;
    bike.updatedAt = now;

    await this.bikeRepository.update(bike);

    return reservation;
  }
}