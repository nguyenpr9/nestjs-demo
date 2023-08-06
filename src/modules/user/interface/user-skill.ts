import { Document } from 'mongoose';

export interface UserSkill extends Document {
  readonly username: string;
  readonly level: number;
  readonly skill: string;
}
