import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserSkillService } from './user-skill.service';

@Controller('user-skill')
export class UserController {
  constructor(private userSkillService: UserSkillService) {}
  @Get('/')
  async fetch(@Res() res, @Param('username') username) {
    const users = await this.userSkillService.fetchUsers(username);
    return res.status(HttpStatus.OK).json(users);
  }
  @Post('/create')
  async create(@Res() res, @Body() body: CreateUserDTO) {
    const user = await this.userSkillService.createUser(body);
    return res.status(HttpStatus.OK).json(user);
  }
}
