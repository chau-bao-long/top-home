// @flow
import React from "react"
import type { Blog } from "../../models/blog"
import ReactMarkdown from "react-markdown"
import altImg from "../../images/ironman.png"

type Props = {
  blog: Blog,
  onClick: (blog: Blog) => void,
}

export default function preview({blog, onClick}: Props) {
  const isContainThumbnail = blog.thumbnail.match(/http:\/\/.+/g)
  return (
    <div className="col-md-6" onClick={(e) => {onClick(blog)}}>
      <div className="row preview rounded">
        {
          isContainThumbnail &&
          <span className="col-md-4 col-xs-12 preview__img-container">
            <img 
              className="preview__img"
              src={blog.thumbnail}
              onError={e => e.target.src = altImg}
            />
          </span>
        }
        <span className={(isContainThumbnail ? "col-md-8" : "col-md-12") + " preview__blog"}>
          <div className="preview__title">
            {blog.title}
          </div>
          <ReactMarkdown className="preview__content" source={blog.body}/>
        </span>
      </div>
    </div>
  )
}
