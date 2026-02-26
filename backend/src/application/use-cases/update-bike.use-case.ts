import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { BikeRepository } from '../../domain/repositories/bike.repository.interface';
import type { UpdateBikeDto } from '../dtos/update-bike.dto';
import { BikeStatus } from '../../domain/entities/bike.entity';

@Injectable()
export class UpdateBikeUseCase {
  constructor(
    @Inject('BikeRepository')
    private readonly bikeRepository: BikeRepository,
  ) {}

  async execute(id: string, dto: UpdateBikeDto): Promise<void> {
    const bike = await this.bikeRepository.findById(id);

    if (!bike) {
      throw new NotFoundException('Bike not found');
    }

    if (dto.code) bike.code = dto.code;
    if (dto.status) bike.status = dto.status as BikeStatus;

    bike.updatedAt = new Date();

    await this.bikeRepository.update(bike);
  }
}