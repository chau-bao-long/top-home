// @flow
import React from "react" 
import MarkdownEditor from "../../components/BlogEditor"
import { connect } from "react-redux"
import { showLoading, setError } from "../../actions/apiAction"
import { createBlog, updateBlog } from "../../actions/blogEditorAction"
import { selector } from "../../selectors/blog"
import type { Blog } from "../../services/restClient/models/blog"
import dateFns from "date-fns"

type Props = {
  isLoading: boolean,
  errorMsg: string,
  setError: (error?: string) => {},
  showLoading: (isLoading: boolean) => {},
  createBlog: (title: string, body: string) => Promise<>,
  updateBlog: (id: string, title: string, body: string) => Promise<>,
  blog: Blog,
}
type State = {}

const SAVED_TIME_FORMAT = "[saved at ] hh:mm [--] MM/DD/YYYY"

class BlogEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  render() {
    const { isLoading, errorMsg, blog } = this.props
    return (
      <MarkdownEditor 
        onSave={this.handleSave}
        savedTime={this.savedTime}
        isSaving={isLoading}
        errorMsg={errorMsg}
      />
    )
  }

  handleSave = (title: string, body: string) => {
    const { showLoading, blog, updateBlog, createBlog } = this.props
    showLoading(true)
    if (blog) {
      updateBlog(blog.id, title, body)
    } else {
      createBlog(title, body)
    }
  }

  get savedTime(): string {
    const { blog } = this.props
    if(!blog) return ""
    return dateFns.format(new Date(blog.updatedAt), SAVED_TIME_FORMAT)
  }
}

export default connect(selector, { showLoading, setError, createBlog , updateBlog })(BlogEditor)
