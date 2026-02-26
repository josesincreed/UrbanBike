import { Module } from '@nestjs/common';
import { AdminController } from '../controllers/admin.controller';

import { CreateBikeUseCase } from '../../application/use-cases/create-bike.use-case';
import { ListBikesUseCase } from '../../application/use-cases/list-bikes.use-case';
import { GetBikeUseCase } from '../../application/use-cases/get-bike.use-case';
import { UpdateBikeUseCase } from '../../application/use-cases/update-bike.use-case';
import { DeleteBikeUseCase } from '../../application/use-cases/delete-bike.use-case';

import { DynamoBikeRepository } from '../../infrastructure/repositories/dynamo-bike.repository';

@Module({
  controllers: [AdminController],
  providers: [
    CreateBikeUseCase,
    ListBikesUseCase,
    GetBikeUseCase,
    UpdateBikeUseCase,
    DeleteBikeUseCase,
    {
      provide: 'BikeRepository',
      useClass: DynamoBikeRepository,
    },
  ],
})
export class AdminModule {}