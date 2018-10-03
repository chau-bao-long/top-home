// @flow
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import BlogComponent from '../../components/Blog';
import FurtherReading from '../../components/FurtherReading';
import BlogDetail from '../../components/BlogDetail';
import NavBar from '../../components/Blog/Navbar';
import { connect } from 'react-redux';
import { selector as blogSelector } from '../../selectors/blog';
import { commentSelector } from '../../selectors/comment';
import type { Blog } from '../../models/blog';
import type { Comment, CommentState } from '../../models/comment';
import { getBlogs, claps, deleteBlog } from '../../actions/blogAction';
import { getComments, createComment } from '../../actions/commentAction';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import styled from 'styled-components';
import DetailsContainer from '../../components/BlogDetail/DetailsContainer';
import LoadingBar from '../../components/Common/LoadingBar';

type Props = {
  blogs: Array<Blog>,
  blog: Blog,
  blogId: string,
  getBlogs: (blog: Blog) => void,
  deleteBlog: Function,
  match: Object,
  history: Object,
  isRenderDetail: boolean,
  isAuth: boolean,
  claps: (id: number) => void,
  createComment: (number, string, string) => void,
  getComments: (number) => Array<Comment>,
  comment: CommentState,
  isLoading: boolean,
  errorMsg: string,
}

type State = {
  navBarCollapse: boolean,
}

const Container = styled.div`
  background: ${props => props.theme.color.alabaster};
  position: relative;
  padding-top: 160px;
`

class BlogContainer extends React.Component<Props, State> {
  scrollElement: any;
  showingError: string = '';

  constructor(props: Props) {
    super(props)
    this.state = {
      navBarCollapse: false,
    }
  }

  componentDidMount() {
    this.props.getBlogs()
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    this._toastErrorIfAny(prevProps);
    this._goBackAfterDeleteBlog(prevProps);
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
    let isNavBarCollapse = window.scrollY > 100 ;
    this.setState({ navBarCollapse: isNavBarCollapse });
    const { getComments, blog: { id }, comment: { isLoading } } = this.props;
    if (!isLoading && this.isReachBottom()) {
      getComments(id)
    }
  }

  isReachBottom() {
    return this.scrollElement.getBoundingClientRect().bottom <= window.innerHeight
  }

  handleCommentSubmit(blogId: number, author: string, content: string) {
    this.props.createComment(blogId, author, content)
  }

  handleDeleteBlog() {
    const { deleteBlog, blogId } = this.props;
    if (confirm('Are you sure you wish to delete this blog?')) deleteBlog(blogId);
  }

  _toastErrorIfAny(prevProps: Props) {
    const { errorMsg } = this.props;
    if (errorMsg && errorMsg !== this.showingError) { 
      this.showingError = errorMsg; 
      toast.error(errorMsg, {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => { this.showingError = ''; },
      });
    }
  }

  _goBackAfterDeleteBlog(prevProps: Props) {
    const { isLoading, errorMsg } = this.props;
    if (prevProps.isLoading && !isLoading && !errorMsg) {
      this.props.history.goBack();
    }
  }

  renderDetail = () => {
    return <DetailsContainer innerRef={e => this.scrollElement = e}>
      <Route path={`${this.props.match.path}/:id`} render={
        props => 
        <BlogDetail 
          blog={this.props.blog} 
          comment={this.props.comment}
          onClap={id => this.handleClap(id)} 
          onCommentSubmit={(blogId, title, content) => this.handleCommentSubmit(blogId, title, content)}
        />
      } exact />
      <FurtherReading blogs={this.props.blogs.slice(0, 5)} />
    </DetailsContainer>
  }

  renderList = () => <BlogComponent blogs={this.props.blogs} onClick={blog => this.handleClick(blog)}/>

  render() {
    const { isRenderDetail, isAuth, isLoading } = this.props
    const { navBarCollapse } = this.state
    return (
      <Container>
        <ToastContainer autoClose={3000} hideProgressBar={true} />
        { isLoading && <LoadingBar /> }
        <NavBar 
          collapse={navBarCollapse} 
          editMode={isRenderDetail} 
          onDeleteBlog={() =>this.handleDeleteBlog()}
          onEditBlog={() => this.handleEditBlog()}
          isAuth={isAuth}
        />
        { isRenderDetail ? this.renderDetail() : this.renderList() }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  ...blogSelector(state, props),
  comment: commentSelector(state),
})

export default withCookies(withRouter(connect(mapStateToProps, {
  getBlogs, claps, getComments, createComment, deleteBlog,
})(BlogContainer)))
