import { Module } from '@nestjs/common';

import { UserModule } from 'src/UserModule/user.module';
import { UserProfileService } from './user.profile.service';
import { UserProfileController } from './user.profile.controller';


@Module({
  imports: [UserModule],   
  providers: [UserProfileService],
  controllers: [UserProfileController],
})
export class UserProfileModule {}
