// @flow
import React from "react"
import ReactMarkdown from "react-markdown"
import _ from "lodash"
import type { Blog } from "../../models/blog"
import Preview from "./Preview"
import styled from "styled-components"
import { breakpoint } from "../../utils/styleUtils"

type Props = {
  blogs: Array<Blog>,
  onClick: Function,
}

const BlogList = styled.div.attrs({
  className: "row",
})`
  overflow: visible;
  margin: 0 35px;

  ${breakpoint.xxs`
  margin: 0 5px;
  `}
`

export default class BlogComponent extends React.PureComponent<Props> {
  constructor(props: Props) {
    super()
  }

  render() {
    const { blogs, onClick } = this.props
    return (
      <div className="container-fluid">
        <BlogList>
          {
            blogs.map(blog => (
              <Preview key={blog.id} blog={blog} onClick={onClick}/>
            ))
          }
        </BlogList>
      </div>
    );
  }
}
