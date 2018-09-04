// @flow
import React from "react"
import BlogComponent from "../../components/Blog"
import FurtherReading from "../../components/FurtherReading"
import BlogDetail from "../../components/BlogDetail"
import NavBar from "../../components/Blog/Navbar"
import { connect } from "react-redux"
import { selector } from "../../selectors/blog"
import type { Blog } from "../../models/blog"
import type { Comment } from "../../models/comment"
import { getBlogs, claps } from "../../actions/blogAction"
import { getComments, createComment } from "../../actions/commentAction"
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import styled from "styled-components"
import DetailsContainer from '../../components/BlogDetail/DetailsContainer'

type Props = {
  blogs: Array<Blog>,
  blog: Blog,
  blogId: string,
  getBlogs: (blog: Blog) => void,
  match: Object,
  history: Object,
  isRenderDetail: boolean,
  isAuth: boolean,
  claps: (id: number) => void,
  createComment: (number, string, string) => void,
  getComments: (number) => Array<Comment>
}

type State = {
  navBarStyle: string,
}

const Container = styled.div`
  background: ${props => props.theme.color.alabaster};
`

class BlogContainer extends React.Component<Props, State> {
  scrollElement: any

  constructor(props: Props) {
    super(props)
    this.state = {
      navBarStyle: "",
    }
  }

  render() {
    const { isRenderDetail, isAuth } = this.props
    const { navBarStyle } = this.state
    return (
      <Container>
        <NavBar 
          className={navBarStyle} 
          editMode={isRenderDetail} 
          onEditBlog={() => this.handleEditBlog()}
          isAuth={isAuth}
        />
        { isRenderDetail ? this.renderDetail() : this.renderList() }
      </Container>
    )
  }

  componentDidMount() {
    this.props.getBlogs()
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick(blog: Blog) {
    this.props.history.push(`${this.props.match.url}/${blog.id}`)
  }

  handleEditBlog() {
    this.props.history.push(`${this.props.match.url}/${this.props.blogId}/edit`)
  }

  handleClap(id: number) {
    this.props.claps(id)
  }

  handleScroll = (event: SyntheticEvent<>) => {
    let style = (window.scrollY + (this.state.navBarStyle ? 60 : 0)) > 60 ?  "navbar--scrolled" : "";
    this.setState({navBarStyle: style});
    const { getComments, blog: { id, comments: { isLoading } } } = this.props;
    if (!isLoading && this.isReachBottom()) {
      getComments(id)
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  isReachBottom() {
    return this.scrollElement.getBoundingClientRect().bottom <= window.innerHeight
  }

  handleCommentSubmit(blogId: number, author: string, content: string) {
    this.props.createComment(blogId, author, content)
  }

  renderDetail = () => (
    <DetailsContainer innerRef={e => this.scrollElement = e}>
      <Route path={`${this.props.match.path}/:id`} render={
        props => 
        <BlogDetail 
          blog={this.props.blog} 
          onClap={id => this.handleClap(id)} 
          onCommentSubmit={(blogId, title, content) => this.handleCommentSubmit(blogId, title, content)}
        />
      } exact />
      <FurtherReading blogs={this.props.blogs.slice(0, 5)} />
    </DetailsContainer>
  )

  renderList = () => <BlogComponent blogs={this.props.blogs} onClick={blog => this.handleClick(blog)}/>
}

export default withCookies(withRouter(connect(selector, { getBlogs, claps, getComments, createComment })(BlogContainer)))
