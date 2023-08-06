import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserSkill } from './interface/user-skill';
import { CreateUserSkillDTO } from './dto/create-user-skill.dto';

@Injectable()
export class UserSkillService {
  constructor(
    @InjectModel('UserSkill') private readonly userSkillModel: Model<UserSkill>,
  ) {}
  fetchUsers(username: string) {
    return this.userSkillModel.find().where({ username }).exec();
  }
  createUser(user: CreateUserSkillDTO) {
    const newUser = new this.userSkillModel(user);
    return newUser.save();
  }
  updateUser(id: string, user: CreateUserSkillDTO) {
    return this.userSkillModel.findByIdAndUpdate(id, user, { new: true });
  }
  deleteUser(id: string) {
    return this.userSkillModel.findByIdAndDelete(id);
  }
}
