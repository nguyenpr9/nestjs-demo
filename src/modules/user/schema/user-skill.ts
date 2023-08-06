import { Schema } from 'mongoose';

export const userSkillSchema = new Schema({
  username: String,
  skill: String,
  level: Number,
});
