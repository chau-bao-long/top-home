// @flow
import React from "react"
import ReactMarkdown from "react-markdown"
import type { Blog } from "../../services/restClient/models/blog"

type Props = {
  blog: Blog,
}

export default function BlogDetail({blog}: Props) {
  if (!blog) return null
  return (
    <div className="blog-details">
      <h2 className="blog-details__title">{blog.title}</h2>
      <ReactMarkdown className="blog-details__body" source={blog.body}/>
    </div>
  )
}
