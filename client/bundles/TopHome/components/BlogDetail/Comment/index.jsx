// @flow
import React from 'react';
import styled from 'styled-components';
import type { Comment } from '../../../models/comment';
import CommentEditor from '../CommentEditor';
import SpinnerLoading from '../../Common/SpinnerLoading';
import CommentItem from './CommentItem';

type Props = {
  comment: { comments: Array<Comment>, isLoading: boolean, errorMsg: string },
  onCommentSubmit: (author: string, content: string) => void,
}

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default class CommentComponent extends React.PureComponent<Props> {
  static defaultProps = {
    comment: { comments: [], isLoading: false },
  }

  render() {
    const { onCommentSubmit, comment: { comments, isLoading, errorMsg } } = this.props;
    return (
      <section className="comments mt-5 py-3">
        <h6>Comments</h6>
        <CommentEditor onSubmit={onCommentSubmit} isLoading={isLoading} error={errorMsg} />
        { comments.map(c => <CommentItem key={c.id} comment={c} />) }
        { isLoading && <LoadingWrapper><SpinnerLoading /></LoadingWrapper> }
      </section>
    );
  }
}
