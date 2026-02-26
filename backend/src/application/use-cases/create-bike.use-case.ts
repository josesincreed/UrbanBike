import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { Bike, BikeStatus } from '../../domain/entities/bike.entity';
import type { BikeRepository } from '../../domain/repositories/bike.repository.interface';
import { CreateBikeDto } from '../dtos/create-bike.dto';

@Injectable()
export class CreateBikeUseCase {
  constructor(
    @Inject('BikeRepository')
    private readonly bikeRepository: BikeRepository,
  ) {}

  async execute(dto: CreateBikeDto): Promise<Bike> {
    const bike: Bike = {
      id: randomUUID(),
      stationId: dto.stationId,
      code: dto.code,
      status: BikeStatus.AVAILABLE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await this.bikeRepository.create(bike);

    return bike;
  }
}