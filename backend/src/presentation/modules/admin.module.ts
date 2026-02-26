import { Module } from '@nestjs/common';
import { AdminController } from '../controllers/admin.controller';

import { CreateBikeUseCase } from '../../application/use-cases/create-bike.use-case';
import { ListBikesUseCase } from '../../application/use-cases/list-bikes.use-case';
import { GetBikeUseCase } from '../../application/use-cases/get-bike.use-case';
import { UpdateBikeUseCase } from '../../application/use-cases/update-bike.use-case';
import { DeleteBikeUseCase } from '../../application/use-cases/delete-bike.use-case';

import { CreateStationUseCase } from '../../application/use-cases/create-station.use-case';
import { ListStationsUseCase } from '../../application/use-cases/list-stations.use-case';

import { DynamoBikeRepository } from '../../infrastructure/repositories/dynamo-bike.repository';
import { DynamoStationRepository } from '../../infrastructure/repositories/dynamo-station.repository';

@Module({
  controllers: [AdminController],
  providers: [
    // Bike UseCases
    CreateBikeUseCase,
    ListBikesUseCase,
    GetBikeUseCase,
    UpdateBikeUseCase,
    DeleteBikeUseCase,

    // Station UseCases
    CreateStationUseCase,
    ListStationsUseCase,

    // Repositories
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
export class AdminModule {}