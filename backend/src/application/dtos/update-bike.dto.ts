import { IsEnum, IsOptional, IsString } from 'class-validator';
import { BikeStatus } from '../../domain/entities/bike.entity';

export class UpdateBikeDto {
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsEnum(BikeStatus)
  status?: BikeStatus;
}