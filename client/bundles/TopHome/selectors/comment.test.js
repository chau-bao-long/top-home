// @flow
import parse from 'date-fns/parse';
import { commentSelector as selector } from './comment';
import type { CommentState, Comment } from '../models/comment';

const normalComment: Comment = {
  id: 1,
  author: 'David beckham',
  createdAt: '2018-10-02T03:41:14.000Z',
  updatedAt: '2018-10-02T03:40:14.000Z',
  content: 'VinFast is an incrediable car',
};

const normalCommentState: CommentState = {
  idLoading: false,
  errorMsg: '',
  comments: [normalComment],
}

let state = {
  comment: normalCommentState,
}

describe('test comment selector', () => {
  it('should parse datetime and generate display time correctly', () => {
    const parsedComment = selector(state).comments[0]
    expect(parsedComment).toMatchObject({
      datetime: parse(normalComment.updatedAt),
      displayTime: 'October 02, 2018',
    });
  });

  it('should order comment newest first', () => {
    const oldestComment = { ...normalComment, updatedAt: '2018-09-03T03:41:14.000Z', id: 2 };
    const newestComment = { ...normalComment, updatedAt: '2018-11-04T03:41:14.000Z', id: 3 };
    expect(selector({
      comment: {
        comments: [normalComment, oldestComment, newestComment],
      }
    }).comments.map(c => c.id)).toEqual([3, 1, 2]);
  });
});
