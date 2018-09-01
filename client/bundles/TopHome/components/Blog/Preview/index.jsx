// @flow
import React from "react"
import type { Blog } from "../../models/blog"
import altImg from "../../../images/ironman.png"
import styled from "styled-components"
import { breakpoint } from "../../../vars/helper"
import CardView from "./CardView"
import { Thumbnail, ThumbnailContainer } from "./Thumbnail"
import Markdown from "./Markdown"
import Title from "./Title"
import Content from "./Content"

type Props = {
  blog: Blog,
  onClick: (blog: Blog) => void,
}

export default function Preview({blog, onClick}: Props) {
  const isContainThumbnail = blog.thumbnail.match(/http:\/\/.+/g)

  return (
    <div className="col-md-6" onClick={(e) => {onClick(blog)}}>
      <CardView>
        {
          isContainThumbnail && <ThumbnailContainer>
            <Thumbnail src={blog.thumbnail} onError={e => e.target.src = altImg} />
          </ThumbnailContainer>
        }
        <Content className={(isContainThumbnail ? "col-md-8" : "col-md-12")}>
          <Title>{blog.title}</Title>
          <Markdown source={blog.body}/>
        </Content>
      </CardView>
    </div>
  )
}
