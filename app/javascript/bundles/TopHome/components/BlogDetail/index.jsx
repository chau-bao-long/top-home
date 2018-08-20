// @flow
import React from "react"
import ReactMarkdown from "react-markdown"
import type { Blog } from "../../services/restClient/models/blog"

type Props = {
  blog: Blog,
}

export default function BlogDetail({blog}: Props) {
  return (
    <ReactMarkdown className="blog-details" source={blog ? blog.body : ""} />
  )
}
