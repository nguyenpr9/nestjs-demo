import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  async fetch(@Res() res) {
    const users = await this.userService.fetchUsers();
    return res.status(HttpStatus.OK).json(users);
  }
  @Post('/create')
  async create(@Res() res, @Body() body: CreateUserDTO) {
    const users = await this.userService.createUser(body);
    return res.status(HttpStatus.OK).json(users);
  }
}
