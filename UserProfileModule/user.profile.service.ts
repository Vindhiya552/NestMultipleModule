import { Injectable } from '@nestjs/common';
import { UserService } from 'src/UserModule/user.service';


@Injectable()
export class UserProfileService {
  constructor(private readonly userService: UserService) {}

  getProfile() {
    return this.userService.getUser();
  }
}
