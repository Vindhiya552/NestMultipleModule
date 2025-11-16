import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './UserModule/user.module';
import { UserProfileModule } from './UserProfileModule/user.profile.module';
import { UserdashboardModule } from './UserDashboard/dashboard.module';


@Module({
  imports: [UserModule,UserProfileModule,UserdashboardModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
