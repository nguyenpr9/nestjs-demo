import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserSkill } from './interface/user-skill';

@Injectable()
export class UserSkillService {
  constructor(
    @InjectModel('UserSkill') private readonly userSkillModel: Model<UserSkill>,
  ) {}
  fetchUsers() {
    return this.userSkillModel.find().exec();
  }
  createUser(user: CreateUserDTO) {
    const newUser = new this.userSkillModel(user);
    return newUser.save();
  }
}
