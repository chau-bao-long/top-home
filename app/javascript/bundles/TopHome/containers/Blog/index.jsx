// @flow
import React from "react"
import BlogComponent from "../../components/Blog"
import { connect } from "react-redux"
import { selector } from "../../selectors/blog"
import type { Blog } from "../../services/restClient/models/blog"
import { getBlogs } from "../../actions/blogEditorAction"

type Props = {
  blogs: Array<Blog>,
  getBlogs: Function,
}

type State = {}

class BlogContainer extends React.Component<Props, State> {
  render() {
    return (
      <BlogComponent blogs={this.props.blogs}/>
    );
  }

  componentDidMount() {
    this.props.getBlogs()
  }
}

export default connect(selector, { getBlogs })(BlogContainer)
