// @flow
import React from "react"
import BlogComponent from "../../components/Blog"
import FurtherReading from "../../components/FurtherReading"
import BlogDetail from "../../components/BlogDetail"
import NavBar from "../../components/Blog/navbar"
import { connect } from "react-redux"
import { selector } from "../../selectors/blog"
import type { Blog } from "../../services/restClient/models/blog"
import { getBlogs } from "../../actions/blogEditorAction"
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

type Props = {
  blogs: Array<Blog>,
  getBlogs: (blog: Blog) => void,
  match: Object,
  history: Object,
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
    this.props.history.push(`${this.props.match.url}/${this.selectedBlogId}/edit`)
  }

  handleScroll = (event: SyntheticEvent<>) => {
    let style = (window.scrollY + (this.state.navBarStyle ? 60 : 0)) > 60 ?  "navbar--scrolled" : "" 
    this.setState({navBarStyle: style})
  }

  isRenderDetail = () => !this.props.match.isExact

  get selectedBlog() {
    return this.props.blogs.find(blog => blog.id == this.selectedBlogId)
  }

  get selectedBlogId() {
    return this.props.location.pathname.match(/^\/blogs\/(\d+)/)[1]
  }

  renderDetail = () => (
    <div className="details-container">
      <Route path={`${this.props.match.path}/:id`} render={
        props => <BlogDetail blog={this.selectedBlog}/>
      } exact />
      <FurtherReading blogs={this.props.blogs.slice(0, 5)}/>
    </div>
  )

  renderList = () => <BlogComponent blogs={this.props.blogs} onClick={blog => this.handleClick(blog)}/>

  render() {
    return (
      <div>
        <NavBar className={this.state.navBarStyle} onEditBlog={() => this.handleEditBlog()}/>
        { this.isRenderDetail() ? this.renderDetail() : this.renderList() }
      </div>
    )
  }
}

export default withRouter(connect(selector, { getBlogs })(BlogContainer))
