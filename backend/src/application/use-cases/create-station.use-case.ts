import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { Station } from '../../domain/entities/station.entity';
import type { StationRepository } from '../../domain/repositories/station.repository.interface';
import { CreateStationDto } from '../dtos/create-station.dto';

@Injectable()
export class CreateStationUseCase {
  constructor(
    @Inject('StationRepository')
    private readonly stationRepository: StationRepository,
  ) {}

  async execute(dto: CreateStationDto): Promise<Station> {
    const station: Station = {
      id: randomUUID(),
      name: dto.name,
      location: dto.location,
      city: 'Medellin',
      capacity: dto.capacity,
      createdAt: new Date().toISOString(),
    };

    await this.stationRepository.create(station);

    return station;
  }
}