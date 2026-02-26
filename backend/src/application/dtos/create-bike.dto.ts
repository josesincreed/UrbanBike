import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBikeDto {
  @IsString()
  @IsNotEmpty()
  stationId: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}