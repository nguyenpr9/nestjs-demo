import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UserSkillService } from './user-skill.service';
import { CreateUserSkillDTO } from './dto/create-user-skill.dto';

@Controller('user-skill')
export class UserSkillController {
  constructor(private userSkillService: UserSkillService) {}
  @Get('/')
  async fetch(@Res() res, @Param('id') id) {
    const users = await this.userSkillService.fetchUsers(id);
    return res.status(HttpStatus.OK).json(users);
  }
  @Post('/create')
  async create(@Res() res, @Body() body: CreateUserSkillDTO) {
    const user = await this.userSkillService.createUser(body);
    return res.status(HttpStatus.OK).json(user);
  }
  @Put('/update')
  async update(@Res() res, @Param('id') id, @Body() body: CreateUserSkillDTO) {
    const user = await this.userSkillService.updateUser(id, body);
    return res.status(HttpStatus.OK).json(user);
  }
  @Delete('/delete')
  async delete(@Res() res, @Param('id') id) {
    const user = await this.userSkillService.deleteUser(id);
    return res.status(HttpStatus.OK).json(user);
  }
}
