// @flow
import React from "react"
import SimpleMDE from "simplemde"

type Props = {}
type State = {}

export default class Blogs extends React.Component<Props, State> {
  render () {
    return (
      <div>
        <textarea id="MyID"/>
      </div>
    )
  }

  componentDidMount() {
    this.simplemde = new SimpleMDE({ element: document.getElementById("MyID") });
  }
}
