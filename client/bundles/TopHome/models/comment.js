// @flow
export type Comment = {
  id: number;
  author: string;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export type CommentState = {
  isLoading: boolean,
  errorMsg: string,
  comments: Array<Comment>
}
