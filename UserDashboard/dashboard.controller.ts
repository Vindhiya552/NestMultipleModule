import { Controller, Get } from '@nestjs/common';
import { UserDashboardService } from './dashboard.service';



@Controller('dashboard')
export class UserDashboardController {
  constructor(private readonly dashboarService: UserDashboardService) {}

  @Get()
  getProfileMsg(): string {
    return this.dashboarService.getdashboard();
  }
}
