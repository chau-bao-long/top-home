// @flow
import React from "react"
import MarkdownEditor from "../../components/BlogEditor"
import { connect } from "react-redux"
import { blogEditorAction } from "../../actions/blogEditorAction"

type Props = {
  isLoading: boolean,
}
type State = {}

export default class BlogEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  render() {
    const { isLoading } = this.props
    return (
      <MarkdownEditor onSave={this.handleSave} isSaving={isLoading}/>
    )
  }

  handleSave = (title: string, body: string) => {
  }
}
