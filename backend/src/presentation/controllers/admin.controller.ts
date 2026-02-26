import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateBikeUseCase } from '../../application/use-cases/create-bike.use-case';
import { ListBikesUseCase } from '../../application/use-cases/list-bikes.use-case';
import { GetBikeUseCase } from '../../application/use-cases/get-bike.use-case';
import { UpdateBikeUseCase } from '../../application/use-cases/update-bike.use-case';
import { DeleteBikeUseCase } from '../../application/use-cases/delete-bike.use-case';

import { CreateStationUseCase } from '../../application/use-cases/create-station.use-case';
import { ListStationsUseCase } from '../../application/use-cases/list-stations.use-case';

import { CreateUserUseCase } from '../../application/use-cases/create-user.use-case';
import { GetUserUseCase } from '../../application/use-cases/get-user.use-case';

import { CreateBikeDto } from '../../application/dtos/create-bike.dto';
import { UpdateBikeDto } from '../../application/dtos/update-bike.dto';
import { CreateStationDto } from '../../application/dtos/create-station.dto';
import { CreateUserDto } from '../../application/dtos/create-user.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly createBikeUseCase: CreateBikeUseCase,
    private readonly listBikesUseCase: ListBikesUseCase,
    private readonly getBikeUseCase: GetBikeUseCase,
    private readonly updateBikeUseCase: UpdateBikeUseCase,
    private readonly deleteBikeUseCase: DeleteBikeUseCase,
    private readonly createStationUseCase: CreateStationUseCase,
    private readonly listStationsUseCase: ListStationsUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
  ) {}

  // ---------------------------
  // BIKES
  // ---------------------------

  @Post('bikes')
  async createBike(@Body() dto: CreateBikeDto) {
    return this.createBikeUseCase.execute(dto);
  }

  @Get('bikes')
  async findAllBikes() {
    return this.listBikesUseCase.execute();
  }

  @Get('bikes/:id')
  async findBikeById(@Param('id') id: string) {
    return this.getBikeUseCase.execute(id);
  }

  @Patch('bikes/:id')
  async updateBike(
    @Param('id') id: string,
    @Body() dto: UpdateBikeDto,
  ) {
    return this.updateBikeUseCase.execute(id, dto);
  }

  @Delete('bikes/:id')
  async deleteBike(@Param('id') id: string) {
    return this.deleteBikeUseCase.execute(id);
  }

  // ---------------------------
  // STATIONS
  // ---------------------------

  @Post('stations')
  async createStation(@Body() dto: CreateStationDto) {
    return this.createStationUseCase.execute(dto);
  }

  @Get('stations')
  async listStations() {
    return this.listStationsUseCase.execute();
  }

  // ---------------------------
  // USERS
  // ---------------------------

  @Post('users')
  async createUser(@Body() dto: CreateUserDto) {
    return this.createUserUseCase.execute(dto);
  }

  @Get('users/:id')
  async getUser(@Param('id') id: string) {
    return this.getUserUseCase.execute(id);
  }
}