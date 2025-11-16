import { Injectable } from '@nestjs/common';
import { UserService } from 'src/UserModule/user.service';


@Injectable()
export class UserDashboardService {
  constructor(private readonly userService: UserService) {}

  getdashboard() {
    return this.userService.getUser();
  }
}
