import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserSkillService } from './user-skill.service';

@Controller('user')
export class UserController {
  constructor(private userSkillService: UserSkillService) {}
  @Get('/')
  async fetch(@Res() res) {
    const users = await this.userService.fetchUsers();
    return res.status(HttpStatus.OK).json(users);
  }
  @Post('/create')
  async create(@Res() res, @Body() body: CreateUserDTO) {
    const user = await this.userService.createUser(body);
    return res.status(HttpStatus.OK).json(user);
  }
}
