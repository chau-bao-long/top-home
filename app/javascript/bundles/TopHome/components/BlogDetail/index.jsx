// @flow
import React from "react"
import ReactMarkdown from "react-markdown"
import type { Blog } from "../../models/blog"
import SocialComponent from "./social"

type Props = {
  blog: Blog,
  onClap: (blogId: number) => void,
}

type State = {
  isClap: boolean,
}

export default class BlogDetail extends React.PureComponent<Props, State>  {
  state: State = { 
    isClap: false
  }

  render() {
    const { blog } = this.props
    const { isClap } = this.state
    if (!blog) return null
    return (
      <div className="blog-details">
        <h2 className="blog-details__title">{blog.title}</h2>
        <ReactMarkdown className="blog-details__body" source={blog.body}/>
        <SocialComponent blog={blog} isClap={isClap} onClap={(e) => this.handleClapClick(e)} />
      </div>
    )
  }

  handleClapClick(e: SyntheticEvent<>) {
    if (this.state.isClap) return
    this.setState({isClap: true})
    setTimeout(() => this.setState({isClap: false}), 800)
    this.props.onClap(this.props.blog.id)
  }
}
