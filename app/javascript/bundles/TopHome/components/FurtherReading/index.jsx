// @flow
import React from "react"
import type { Blog } from "../../models/blog"

type Props = {
  blogs: Array<Blog>
}

export default function furtherReading({blogs}: Props) {
  return (
    <div className="fr">
      <h3 className="fr__title">Further reading</h3>
      {
        blogs.map((blog) => (
          <div className="fr__content">
            <img 
              className="fr__img rounded"
              src="https://cdn-images-1.medium.com/max/800/1*ypedtlNYHDd94HwB1f-AnQ.jpeg"
            />
            <h6 className="fr__blog-title">{blog.title}</h6>
          </div>
        ))
      }
    </div>
  )
}
