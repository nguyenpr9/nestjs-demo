import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  fetchUser(@Res() res) {
    const users = await this.userService.fetchUsers();
    return res.status(HttpStatus.OK).json(users);
  }
}
