// @flow
import React from "react"
import type { Comment } from "../../models/comment"

type Props = {
  comments: Array<Comment>;
}

type State = {
}

export default class CommentComponent extends React.PureComponent<Props, State> {
  render() {
    return (
      <section className="comments mt-5 py-3">
        <h5>Comments</h5>

      </section>
    )
  }
}
