// @flow
import React from "react" 
import MarkdownEditor from "../../components/BlogEditor"
import { connect } from "react-redux"
import { showLoading, setError } from "../../actions/apiAction"
import { createBlog } from "../../actions/blogEditorAction"
import { selector } from "../../selectors/blog"

type Props = {
  isLoading: boolean,
  errorMsg: string,
  setError: (error?: string) => {},
  showLoading: (isLoading: boolean) => {},
  createBlog: (title: string, body: string) => Promise<any>,
}
type State = {}

class BlogEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  render() {
    const { isLoading, errorMsg } = this.props
    return (
      <MarkdownEditor 
        onSave={this.handleSave}
        isSaving={isLoading}
        errorMsg={errorMsg}
      />
    )
  }

  handleSave = (title: string, body: string) => {
    this.props.showLoading(true)
    this.props.createBlog(title, body)
  }
}

export default connect(selector, { showLoading, setError, createBlog })(BlogEditor)
