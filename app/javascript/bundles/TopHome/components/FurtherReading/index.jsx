// @flow
import React from "react"
import type { Blog } from "../../models/blog"
import altImg from "../../images/ironman.png"

type Props = {
  blogs: Array<Blog>,
}

export default function furtherReading({blogs}: Props) {
  return (
    <div className="fr">
      <h3 className="fr__title">Further reading</h3>
      {
        blogs.map((blog) => (
          <div key={blog.id} className="fr__content">
            <img 
              className="fr__img rounded"
              src={blog.thumbnail}
              onError={e => e.target.src = altImg}
            />
            <h6 className="fr__blog-title">{blog.title}</h6>
          </div>
        ))
      }
    </div>
  )
}
