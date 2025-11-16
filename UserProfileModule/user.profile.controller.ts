import { Controller, Get } from '@nestjs/common';
import { UserProfileService } from './user.profile.service';


@Controller('profile')
export class UserProfileController {
  constructor(private readonly profileService: UserProfileService) {}

  @Get()
  getProfileMsg(): string {
    return this.profileService.getProfile();
  }
}
