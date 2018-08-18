// @flow
import React from "react"
import Blog from "../../components/Blog"
import { connect } from "react-redux"
import { selector } from "../../selectors/blog"

type Props = {}
type State = {}

class BlogContainer extends React.Component<Props, State> {
  render() {
    return (
      <Blog />
    );
  }
}

export default connect(selector, {})(BlogContainer)
