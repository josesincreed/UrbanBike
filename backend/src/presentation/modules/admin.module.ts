import { Module } from '@nestjs/common';
import { AdminController } from '../controllers/admin.controller';

import { CreateBikeUseCase } from '../../application/use-cases/create-bike.use-case';
import { ListBikesUseCase } from '../../application/use-cases/list-bikes.use-case';
import { GetBikeUseCase } from '../../application/use-cases/get-bike.use-case';
import { UpdateBikeUseCase } from '../../application/use-cases/update-bike.use-case';
import { DeleteBikeUseCase } from '../../application/use-cases/delete-bike.use-case';

import { CreateStationUseCase } from '../../application/use-cases/create-station.use-case';
import { ListStationsUseCase } from '../../application/use-cases/list-stations.use-case';

import { CreateUserUseCase } from '../../application/use-cases/create-user.use-case';
import { GetUserUseCase } from '../../application/use-cases/get-user.use-case';

import { CreateReservationUseCase } from '../../application/use-cases/create-reservation.use-case';
import { ListUserActiveReservationsUseCase } from '../../application/use-cases/list-user-active-reservations.use-case';
import { FinishReservationUseCase } from '../../application/use-cases/finish-reservation.use-case';

import { DynamoBikeRepository } from '../../infrastructure/repositories/dynamo-bike.repository';
import { DynamoStationRepository } from '../../infrastructure/repositories/dynamo-station.repository';
import { DynamoUserRepository } from '../../infrastructure/repositories/dynamo-user.repository';
import { DynamoReservationRepository } from '../../infrastructure/repositories/dynamo-reservation.repository';

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

    // User UseCases
    CreateUserUseCase,
    GetUserUseCase,

    // Reservation UseCases
    CreateReservationUseCase,
    ListUserActiveReservationsUseCase,
    FinishReservationUseCase,

    // Repositories
    {
      provide: 'BikeRepository',
      useClass: DynamoBikeRepository,
    },
    {
      provide: 'StationRepository',
      useClass: DynamoStationRepository,
    },
    {
      provide: 'UserRepository',
      useClass: DynamoUserRepository,
    },
    {
      provide: 'ReservationRepository',
      useClass: DynamoReservationRepository,
    },
  ],
})
export class AdminModule {}