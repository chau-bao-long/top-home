// @flow
import React from "react"
import ReactMarkdown from "react-markdown"
import type { Blog } from "../../models/blog"
import type { Comment } from "../../models/blog"
import SocialComponent from "./Social"
import CommentComponent from "./Comment"
import styled from 'styled-components'

type Props = {
  blog: Blog,
  comment: Array<Comment>,
  onClap: (blogId: number) => void,
}

type State = {
  isClap: boolean,
}

const Wrapper = styled.div`
  min-width: 60%;
`

const Title = styled.h2`
  margin-bottom: 60px;
`

export default class BlogDetail extends React.PureComponent<Props, State>  {
  state: State = { 
    isClap: false
  }

  render() {
    const { blog, comment } = this.props
    const { isClap } = this.state
    if (!blog) return null
    return (
      <Wrapper>
        <Title>{blog.title}</Title>
        <ReactMarkdown className="blog-details__markdown" source={blog.body}/>
        <SocialComponent blog={blog} isClap={isClap} onClap={(e) => this.handleClapClick(e)} />
        <CommentComponent comments={comment} />
      </Wrapper>
    )
  }

  handleClapClick(e: SyntheticEvent<>) {
    if (this.state.isClap) return
    this.setState({isClap: true})
    setTimeout(() => this.setState({isClap: false}), 800)
    this.props.onClap(this.props.blog.id)
  }
}
