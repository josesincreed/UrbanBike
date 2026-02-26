import { Inject, Injectable } from '@nestjs/common';

import type { Station } from '../../domain/entities/station.entity';
import type { StationRepository } from '../../domain/repositories/station.repository.interface';

@Injectable()
export class ListStationsUseCase {
  constructor(
    @Inject('StationRepository')
    private readonly stationRepository: StationRepository,
  ) {}

  async execute(): Promise<Station[]> {
    return this.stationRepository.findAll();
  }
}