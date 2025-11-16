import { Module } from '@nestjs/common';
import { UserModule } from 'src/UserModule/user.module';
import { UserDashboardController } from './dashboard.controller';
import { UserDashboardService } from './dashboard.service';


@Module({
  imports: [UserModule],   
  providers: [UserDashboardService],
  controllers: [UserDashboardController],
})
export class UserdashboardModule {}
