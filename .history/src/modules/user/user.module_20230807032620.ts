import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSkillController } from './user-skill.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: userSchema,
      },
    ]),
  ],
  controllers: [UserController,UserSkillController],
  providers: [UserService],
})
export class UserModule {}
