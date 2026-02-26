import { Module } from '@nestjs/common';
import { AdminModule } from './presentation/modules/admin.module';

@Module({
  imports: [AdminModule],
})
export class AppModule {}