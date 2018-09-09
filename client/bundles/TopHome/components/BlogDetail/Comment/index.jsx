// @flow
import React from "react"
import type { Comment } from "../../../models/Comment"
import CommentEditor from "../CommentEditor"
import { SpinnerLoading } from '../../Common/SpinnerLoading'
import styled from 'styled-components'
import CommentItem from './CommentItem'

type Props = {
  comment: { comments: Array<Comment>, isLoading: boolean },
  onCommentSubmit: (author: string, content: string) => void,
}

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default class CommentComponent extends React.PureComponent<Props> {
  static defaultProps = {
    comment: { comments: [], isLoading: false },
  }

  render() {
    const { onCommentSubmit, comment: { comments, isLoading } } = this.props
    return (
      <section className="comments mt-5 py-3">
        <h5>Comments</h5>
        <CommentEditor onSubmit={onCommentSubmit} isLoading={isLoading}/>
        { comments.map(c => <CommentItem comment={c}/>) }
        { isLoading && <LoadingWrapper><SpinnerLoading /></LoadingWrapper> }
      </section>
    )
  }
}
