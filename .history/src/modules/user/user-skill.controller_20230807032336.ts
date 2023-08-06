import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserSkillService } from './user-skill.service';
import { CreateUserSkillDTO } from './dto/create-user-skill.dto';

@Controller('user-skill')
export class UserController {
  constructor(private userSkillService: UserSkillService) {}
  @Get('/')
  async fetch(@Res() res, @Param('username') username) {
    const users = await this.userSkillService.fetchUsers(username);
    return res.status(HttpStatus.OK).json(users);
  }
  @Post('/create')
  async create(@Res() res, @Body() body: CreateUserSkillDTO) {
    const user = await this.userSkillService.createUser(body);
    return res.status(HttpStatus.OK).json(user);
  }
  @Post('/update')
  async update(@Res() res, @Param('id') id, @Body() body: CreateUserSkillDTO) {
    const user = await this.userSkillService.updateUser(id, body);
    return res.status(HttpStatus.OK).json(user);
  }
}
