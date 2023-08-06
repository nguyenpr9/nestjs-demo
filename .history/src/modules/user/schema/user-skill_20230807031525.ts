import { Schema } from 'mongoose';

export const userSchema = new Schema({
  username: String,
  skill: String,
  level: Number,
});
