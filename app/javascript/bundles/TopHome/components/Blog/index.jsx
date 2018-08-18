// @flow
import React from "react"
import ReactMarkdown from "react-markdown"
import NavBar from "./navbar"

type Props = {}

export default class Blog extends React.PureComponent<Props> {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        <div>
          Content Go here
        </div>
      </div>
    );
  }
}
