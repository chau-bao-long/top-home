// @flow
import React from "react"
import type { Blog } from "../../services/restClient/models/blog"

type Props = {
  blog: Blog,
}

export default function Preview({blog}: Props) {
  return (
    <div className="col-md-6">
      <div className="preview">
        <span>
          <img 
            className="preview__img"
            src="https://cdn-images-1.medium.com/max/800/1*ypedtlNYHDd94HwB1f-AnQ.jpeg"
          />
        </span>
        <div className="preview__title">
          This is ttest title
        </div>
        <div className="preview__content">
          Contentk;sdfjldksjfs;dlfjsd;<br/>
          lkfjsd;lkfjsd;lfkjsdf;lksdjf;lsdkjfsdl;kfjslksfj<br/>
          dfdfdf
        </div>
      </div>
    </div>
  )
}
