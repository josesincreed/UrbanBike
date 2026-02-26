import { Inject, Injectable } from '@nestjs/common';
import type { BikeRepository } from '../../domain/repositories/bike.repository.interface';

@Injectable()
export class DeleteBikeUseCase {
  constructor(
    @Inject('BikeRepository')
    private readonly bikeRepository: BikeRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.bikeRepository.delete(id);
  }
}