// @flow
import React from "react"
import BlogComponent from "../../components/Blog"
import FurtherReading from "../../components/FurtherReading"
import BlogDetail from "../../components/BlogDetail"
import NavBar from "../../components/Blog/navbar"
import { connect } from "react-redux"
import { selector } from "../../selectors/blog"
import type { Blog } from "../../models/blog"
import { getBlogs } from "../../actions/blogAction"
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

type Props = {
  blogs: Array<Blog>,
  blog: Blog,
  blogId: string,
  getBlogs: (blog: Blog) => void,
  match: Object,
  history: Object,
  isRenderDetail: boolean,
}

type State = {
  navBarStyle: string,
}

class BlogContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      navBarStyle: "",
    }
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

  handleScroll = (event: SyntheticEvent<>) => {
    let style = (window.scrollY + (this.state.navBarStyle ? 60 : 0)) > 60 ?  "navbar--scrolled" : "" 
    this.setState({navBarStyle: style})
  }

  renderDetail = () => (
    <div className="details-container">
      <Route path={`${this.props.match.path}/:id`} render={
        props => <BlogDetail blog={this.props.blog}/>
      } exact />
      <FurtherReading blogs={this.props.blogs.slice(0, 5)}/>
    </div>
  )

  renderList = () => <BlogComponent blogs={this.props.blogs} onClick={blog => this.handleClick(blog)}/>

  render() {
    const { isRenderDetail } = this.props
    return (
      <div>
        <NavBar className={this.state.navBarStyle} editMode={isRenderDetail} onEditBlog={() => this.handleEditBlog()}/>
        { isRenderDetail ? this.renderDetail() : this.renderList() }
      </div>
    )
  }
}

export default withRouter(connect(selector, { getBlogs })(BlogContainer))
