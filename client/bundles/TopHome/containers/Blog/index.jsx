// @flow
import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import BlogComponent from '../../components/Blog';
import FurtherReading from '../../components/BlogDetail/FurtherReading';
import BlogDetail from '../../components/BlogDetail';
import NavBar from '../../components/Blog/Navbar';
import { selector as blogSelector } from '../../selectors/blog';
import { commentSelector } from '../../selectors/comment';
import type { Blog } from '../../models/blog';
import type { Comment, CommentState } from '../../models/comment';
import { getBlogs, claps, deleteBlog } from '../../actions/blogAction';
import { getComments, createComment } from '../../actions/commentAction';
import DetailsContainer from '../../components/BlogDetail/DetailsContainer';
import LoadingBar from '../../components/Common/LoadingBar';
import Blocker from '../../services/blocker';
import SubscribeModal from './SubscribeModal';

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
  padding-top: 160px;
  display: flex;
  justify-content: center;
`;

class BlogContainer extends React.Component<Props, State> {
  scrollElement: any;

  showingError: string = '';

  blocker: Blocker = new Blocker();

  constructor(props: Props) {
    super(props);
    this.state = {
      navBarCollapse: false,
    };
  }

  componentDidMount() {
    this.props.getBlogs();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps: Props) {
    this.toastErrorIfAny();
    this.goBackAfterDeleteBlog(prevProps);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick(blog: Blog) {
    const { history, match: { url } } = this.props;
    history.push(`${url}/${blog.id}`);
  }

  handleEditBlog() {
    const { history, match: { url }, blogId } = this.props;
    history.push(`${url}/${blogId}/edit`);
  }

  handleClap(id: number) {
    this.props.claps(id);
  }

  handleScroll = () => {
    this.setState({ navBarCollapse: window.scrollY > 100 });
    const { getComments, blog: { id }, comment: { isLoading } } = this.props;
    if (!isLoading && this.blocker.block() && this.isReachBottom()) {
      getComments(id);
    }
  }

  isReachBottom() {
    return this.scrollElement.getBoundingClientRect().bottom <= window.innerHeight;
  }

  handleCommentSubmit(blogId: number, author: string, content: string) {
    this.props.createComment(blogId, author, content) // eslint-disable-line
  }

  /* eslint-disable */
  handleDeleteBlog() {
    const { deleteBlog, blogId } = this.props;
    if (confirm('Are you sure you wish to delete this blog?')) deleteBlog(blogId); 
  }
  /* eslint-enable */

  toastErrorIfAny() {
    const { errorMsg } = this.props;
    if (errorMsg && errorMsg !== this.showingError) {
      this.showingError = errorMsg;
      toast.error(errorMsg, {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => { this.showingError = ''; },
      });
    }
  }

  goBackAfterDeleteBlog(prevProps: Props) {
    const { isLoading, errorMsg, history } = this.props;
    if (prevProps.isLoading && !isLoading && !errorMsg) {
      history.goBack();
    }
  }

  renderDetail = () => {
    const {
      match: { path }, blog, blogs, comment,
    } = this.props;
    return (
      <DetailsContainer innerRef={(e) => { this.scrollElement = e; }}>
        <Route
          exact
          path={`${path}/:id`}
          render={() => (
            <BlogDetail
              blog={blog}
              comment={comment}
              onClap={id => this.handleClap(id)}
              onCommentSubmit={(blogId, title, content) => {
                this.handleCommentSubmit(blogId, title, content);
              }}
            />
          )}
        />
        <FurtherReading blogs={blogs.slice(0, 5)} />
      </DetailsContainer>
    );
  }

  renderList = () => {
    const { blogs } = this.props;
    return (
      <BlogComponent
        blogs={blogs}
        onClick={blog => this.handleClick(blog)}
      />
    );
  }

  render() {
    const { isRenderDetail, isAuth, isLoading } = this.props;
    const { navBarCollapse } = this.state;
    return (
      <Container>
        <SubscribeModal />
        <ToastContainer autoClose={3000} hideProgressBar />
        { isLoading && <LoadingBar /> }
        <NavBar
          collapse={navBarCollapse}
          editMode={isRenderDetail}
          onDeleteBlog={() => this.handleDeleteBlog()}
          onEditBlog={() => this.handleEditBlog()}
          isAuth={isAuth}
        />
        { isRenderDetail ? this.renderDetail() : this.renderList() }
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  ...blogSelector(state, props),
  comment: commentSelector(state),
});

export default withCookies(withRouter(connect(mapStateToProps, {
  getBlogs, claps, getComments, createComment, deleteBlog,
})(BlogContainer)));
