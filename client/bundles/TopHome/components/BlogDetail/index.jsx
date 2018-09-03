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
  onClap: (blogId: number) => void,
  onCommentSubmit: (blogId: integer, author: string, content: string) => void,
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
    const { blog } = this.props
    const { isClap } = this.state
    if (!blog) return null
    const comments = blog.comments
    return (
      <Wrapper>
        <Title>{blog.title}</Title>
        <ReactMarkdown className="blog-details__markdown" source={blog.body}/>
        <SocialComponent blog={blog} isClap={isClap} onClap={(e) => this.handleClapClick(e)}/>
        <CommentComponent comments={comments} onCommentSubmit={this.handleCommentSubmit}/>
      </Wrapper>
    )
  }


  handleCommentSubmit = (author: string, content: string) => {
    this.props.onCommentSubmit(this.props.blog.id, author, content)
  }

  handleClapClick(e: SyntheticEvent<>) {
    if (this.state.isClap) return
    this.setState({isClap: true})
    setTimeout(() => this.setState({isClap: false}), 800)
    this.props.onClap(this.props.blog.id)
  }
}
