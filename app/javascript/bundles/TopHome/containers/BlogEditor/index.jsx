// @flow
import React from "react"
import MarkdownEditor from "../../components/BlogEditor"

type Props = {}
type State = {}

export default class BlogEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.handleSave = this.handleSave.bind(this)
  }

  render() {
    <MarkdownEditor onSave={this.handleSave}/>
  }

  handleSave = () => {
  }
}
