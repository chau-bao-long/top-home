// @flow
import type { Comment } from './comment';

export type Blog = {
  id: number,
  userId: number,
  title: string,
  body: string,
  clap: number,
  thumbnail: string,
  createdAt: Date,
  updatedAt: Date,
  comments: Array<Comment>,
};
