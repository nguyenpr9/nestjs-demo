import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSkillController } from './user-skill.controller';
import { UserSkillService } from './user-skill.service';
import { userSkillSchema } from './schema/user-skill';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: userSchema,
      },
      {
        name: 'UserSkill',
        schema: userSkillSchema,
      },
    ]),
  ],
  controllers: [UserController, UserSkillController],
  providers: [UserService, UserSkillService],
})
export class UserModule {}
