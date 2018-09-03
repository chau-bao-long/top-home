// @flow
import React from "react"
import type { Comment } from "../../models/Comment"
import CommentEditor from "./CommentEditor"

type Props = {
  comments: { comments: Array<Comment>, isLoading: boolean },
  onCommentSubmit: (author: string, content: string) => void,
}

export default class CommentComponent extends React.PureComponent<Props> {
  static defaultProps = {
    comments: { comments: [], isLoading: false },
  }

  render() {
    const { onCommentSubmit, comments: { comments, isLoading } } = this.props
    return (
      <section className="comments mt-5 py-3">
        <h5>Comments</h5>
        <CommentEditor onSubmit={onCommentSubmit} isLoading={isLoading}/>
        {
          comments.map(comment => 
            <div>{comment.author}</div>
          )
        }
      </section>
    )
  }
}
