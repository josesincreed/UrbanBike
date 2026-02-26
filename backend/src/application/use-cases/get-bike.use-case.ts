import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { Bike } from '../../domain/entities/bike.entity';
import type { BikeRepository } from '../../domain/repositories/bike.repository.interface';

@Injectable()
export class GetBikeUseCase {
  constructor(
    @Inject('BikeRepository')
    private readonly bikeRepository: BikeRepository,
  ) {}

  async execute(id: string): Promise<Bike> {
    const bike = await this.bikeRepository.findById(id);

    if (!bike) {
      throw new NotFoundException('Bike not found');
    }

    return bike;
  }
}