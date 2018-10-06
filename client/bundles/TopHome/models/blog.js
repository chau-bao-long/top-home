// @flow
import type { Comment } from './comment';

export type Blog = {
  id: number,
  userId: number,
  title: string,
  body: string,
  clap: number,
  thumbnail: string,
  created_at: Date,
  updated_at: Date,
  comments: Array<Comment>,
};
