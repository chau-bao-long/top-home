// @flow
import React from "react"
import SimpleMDE from "simplemde"

type Props = {
  onSave: (value: string) => void 
}
type State = {}

export default class Blogs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div>
        <textarea id="blog-area"/>
      </div>
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  componentDidMount() {
    this.initEditor()
    this.setupAutoSave()
  }

  initEditor() {
    this.editor = new SimpleMDE({
      element: document.getElementById("blog-area"),
      spellChecker: true,
      autofocus: true,
    });
  }

  setupAutoSave() {
    this.timerId = setInterval(
      () => this.props.onSave(this.editor.value(),
        3000
      )
  }
}
