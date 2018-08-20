// @flow
import React from "react"
import type { Blog } from "../../services/restClient/models/blog"
import ReactMarkdown from "react-markdown"

type Props = {
  blog: Blog,
  onClick: (blog: Blog) => void,
}

export default function preview({blog, onClick}: Props) {
  return (
    <div className="col-md-6" onClick={(e) => {onClick(blog)}}>
      <div className="row preview">
        <span className="col-md-4 col-xs-12 preview__img-container">
          <img 
            className="preview__img"
            src="https://cdn-images-1.medium.com/max/800/1*ypedtlNYHDd94HwB1f-AnQ.jpeg"
          />
        </span>
        <span className="col-md-8 preview__blog">
          <div className="preview__title">
            {blog.title}
          </div>
          <ReactMarkdown className="preview__content" source={blog.body}/>
        </span>
      </div>
    </div>
  )
}
