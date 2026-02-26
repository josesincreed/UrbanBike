import { Module } from '@nestjs/common';
import { AdminModule } from './presentation/modules/admin.module';
import { PublicModule } from './presentation/modules/public/public.module';

@Module({
  imports: [AdminModule, PublicModule],
})
export class AppModule {}