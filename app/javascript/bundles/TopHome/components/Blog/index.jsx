// @flow
import React from "react"
import ReactMarkdown from "react-markdown"
import _ from "lodash"
import type { Blog } from "../../models/blog"
import Preview from "./preview"

type Props = {
  blogs: Array<Blog>,
  onClick: Function,
}

type State = {
}

export default class BlogComponent extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { blogs, onClick } = this.props
    return (
      <div className="container-fluid">
        <div className="blogs row" >
          {
            blogs.map(blog => (
              <Preview blog={blog} onClick={onClick}/>
            ))
          }
        </div>
      </div>
    );
  }
}
