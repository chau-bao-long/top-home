// @flow
import React from "react"
import MarkdownEditor from "../../components/Blog"

type Props = {}
type State = {}

export default class Blogs extends React.Component<Props, State> {
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
