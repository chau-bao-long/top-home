// @flow
import React from 'react';
import dateFns from 'date-fns';
import { connect } from 'react-redux';
import BlogEditor from '../../components/BlogEditor';
import { error } from '../../actions/apiAction';
import { selector } from '../../selectors/blog';
import type { Blog } from '../../models/blog';
import {
  createBlog, updateBlog, getBlog, getPhotos, uploadPhoto, clearCurrentBlog,
} from '../../actions/blogAction';

type Props = {
  editMode: boolean,
  isLoading: boolean,
  errorMsg: string,
  createBlog: (title: string, body: string) => Promise<>,
  updateBlog: (id: string, title: string, body: string) => Promise<>,
  clearCurrentBlog: () => void,
  getBlog: (id: string) => Promise<>,
  getPhotos: () => {},
  uploadPhoto: (file: File) => void,
  photos: Array<string>,
  blog: Blog,
  blogId: string,
  blogs: Array<Blog>,
}

type State = {}

const SAVED_TIME_FORMAT = '[saved at ] hh:mm [--] MM/DD/YYYY';

class BlogEditorContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    const {
      blogs, blogId, getBlog, getPhotos, editMode, clearCurrentBlog,
    } = this.props;
    if (!editMode) clearCurrentBlog();
    if (blogId && blogs.length === 0) getBlog(blogId);
    getPhotos();
  }

  get savedTime(): string {
    const { blog } = this.props;
    if (!blog) return '';
    return dateFns.format(new Date(blog.updatedAt), SAVED_TIME_FORMAT);
  }

  handleSave = (title: string, body: string) => {
    const { blog, updateBlog, createBlog } = this.props;
    if (blog) {
      updateBlog(blog.id, title, body);
    } else {
      createBlog(title, body);
    }
  }

  render() {
    const {
      isLoading, errorMsg, blog, photos, uploadPhoto,
    } = this.props;
    return (
      <BlogEditor
        onSave={this.handleSave}
        savedTime={this.savedTime}
        isSaving={isLoading}
        errorMsg={errorMsg}
        blog={blog}
        photos={photos}
        onUploadPhoto={photos => uploadPhoto(photos[0])}
      />
    );
  }
}

export default connect(selector, {
  error, createBlog, updateBlog, getBlog, getPhotos, uploadPhoto, clearCurrentBlog,
})(BlogEditorContainer);
