// @flow
import React from "react"
import type { Blog } from "../../services/restClient/models/blog"

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
            blog.title
          </div>
        ))
      }
    </div>
  )
}
