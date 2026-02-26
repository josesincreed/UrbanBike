import { Module } from '@nestjs/common';
import { PublicController } from './public.controller';

import { ListStationsWithAvailableBikesUseCase } from '../../../application/use-cases/list-stations-with-available-bikes.use-case';

import { DynamoBikeRepository } from '../../../infrastructure/repositories/dynamo-bike.repository';
import { DynamoStationRepository } from '../../../infrastructure/repositories/dynamo-station.repository';

@Module({
  controllers: [PublicController],
  providers: [
    ListStationsWithAvailableBikesUseCase,
    {
      provide: 'BikeRepository',
      useClass: DynamoBikeRepository,
    },
    {
      provide: 'StationRepository',
      useClass: DynamoStationRepository,
    },
  ],
})
export class PublicModule {}