import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateBikeUseCase } from '../../application/use-cases/create-bike.use-case';
import { ListBikesUseCase } from '../../application/use-cases/list-bikes.use-case';
import { GetBikeUseCase } from '../../application/use-cases/get-bike.use-case';
import { UpdateBikeUseCase } from '../../application/use-cases/update-bike.use-case';
import { DeleteBikeUseCase } from '../../application/use-cases/delete-bike.use-case';

import type { CreateBikeDto } from '../../application/dtos/create-bike.dto';
import { UpdateBikeDto } from '../../application/dtos/update-bike.dto';

@Controller('admin/bikes')
export class AdminController {
  constructor(
    private readonly createBikeUseCase: CreateBikeUseCase,
    private readonly listBikesUseCase: ListBikesUseCase,
    private readonly getBikeUseCase: GetBikeUseCase,
    private readonly updateBikeUseCase: UpdateBikeUseCase,
    private readonly deleteBikeUseCase: DeleteBikeUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateBikeDto) {
    return this.createBikeUseCase.execute(dto);
  }

  @Get()
  async findAll() {
    return this.listBikesUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.getBikeUseCase.execute(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateBikeDto) {
    return this.updateBikeUseCase.execute(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteBikeUseCase.execute(id);
  }
}