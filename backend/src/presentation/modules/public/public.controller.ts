import { Controller, Get } from '@nestjs/common';
import { ListStationsWithAvailableBikesUseCase } from '../../../application/use-cases/list-stations-with-available-bikes.use-case';

@Controller()
export class PublicController {
  constructor(
    private readonly listStationsWithAvailableBikesUseCase: ListStationsWithAvailableBikesUseCase,
  ) {}

  @Get('stations')
  async listStationsWithBikes() {
    return this.listStationsWithAvailableBikesUseCase.execute();
  }
}