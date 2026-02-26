import { Inject, Injectable } from '@nestjs/common';
import type { Bike } from '../../domain/entities/bike.entity';
import type { BikeRepository } from '../../domain/repositories/bike.repository.interface';

@Injectable()
export class ListBikesUseCase {
  constructor(
    @Inject('BikeRepository')
    private readonly bikeRepository: BikeRepository,
  ) {}

  async execute(): Promise<Bike[]> {
    return this.bikeRepository.findAll();
  }
}