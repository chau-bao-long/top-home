// @flow 
import { createSelector } from "reselect"
import type { CommentState } from "../models/Comment"
import parse from 'date-fns/parse';
import format from 'date-fns/format';

function parseAndFormatCommentTime(comments) {
  comments.forEach((c) => {
    c.datetime = parse(c.updatedAt);
    c.displayTime = format(c.datetime, 'MMMM DD, YYYY');
  });
}

function sortCommentsByTime(comments) {
  comments.sort((a, b) => {
    return b.datetime - a.datetime;
  });
}

export const commentSelector = createSelector(
  (state: CommentState) => state.comment,
  (comment) => {
    parseAndFormatCommentTime(comment.comments);
    sortCommentsByTime(comment.comments);
    return comment;
  },
)
