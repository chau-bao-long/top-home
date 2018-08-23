// @flow
import React from "react"
import type { Blog } from "../../models/blog"
import ReactMarkdown from "react-markdown"

type Props = {
  blog: Blog,
  onClick: (blog: Blog) => void,
}

function getPreviewImg(blog: Blog) {
  url = blog.body.match(/!\[.*\](.*)/g)[0].match(/\(.*\)/g)[0]
  return  url.substring(1, url.length - 1)
}

export default function preview({blog, onClick}: Props) {
  return (
    <div className="col-md-6" onClick={(e) => {onClick(blog)}}>
      <div className="row preview rounded">
        <span className="col-md-4 col-xs-12 preview__img-container">
          <img 
            className="preview__img"
            src={getPreviewImg(blog)}
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
