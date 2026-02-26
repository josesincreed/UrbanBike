import { Inject, Injectable } from '@nestjs/common';

import type { StationRepository } from '../../domain/repositories/station.repository.interface';
import type { BikeRepository } from '../../domain/repositories/bike.repository.interface';

@Injectable()
export class ListStationsWithAvailableBikesUseCase {
  constructor(
    @Inject('StationRepository')
    private readonly stationRepository: StationRepository,

    @Inject('BikeRepository')
    private readonly bikeRepository: BikeRepository,
  ) {}

  async execute() {
    const stations = await this.stationRepository.findAll();

    const result = await Promise.all(
      stations.map(async (station) => {
        const bikes =
          await this.bikeRepository.findAvailableByStation(
            station.id,
          );

        return {
          ...station,
          bikesAvailable: bikes,
        };
      }),
    );

    return result;
  }
}