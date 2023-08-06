import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  fetchUsers() {
    return this.userModel.find().exec();
  }
  createUser(user: CreateUserDTO) {
    const newUser = this.userModel(user);
    return newUser.save();
  }
}
