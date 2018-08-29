// @flow
import React from "react"

type Props = {
  onSubmit: (author: string, content: string) => void,
}

type State = {
  isFocus: boolean,
  title: string,
  content: string,
}

export default class CommentEditor extends React.PureComponent<Props, State> {
  state: State = {
    isFocus: false,
    title: "",
    content: "",
  }

  handleFocus(isFocus: boolean) {
    this.setState({isFocus: isFocus})
  }

  handleTitleChange(e: any) {
    //TODO  Use contenteditable in react style
    this.setState({title: e.target.value})
  }

  handleContentChange(e: any) {
    this.setState({content: e.target.value})
  }

  render() {
    const { isFocus, title, content } = this.state
    const focusClazz = isFocus ? "focus" : "unfocus"
    return (
      <div 
        className={`comments__editor comments__editor--${focusClazz}`}
        tabIndex="-1" 
        onFocus={e => this.handleFocus(true)}
        onBlur={e => this.handleFocus(false)} 
      >
        <p className={`comments__edit-hint comments__edit-hint--${focusClazz}`}>Write a comment...</p>
        <div 
          className="comments__title"
          contentEditable 
          html={title} 
          onChange={e => this.handleTitleChange(e)}
          placeHolder="Enter your name"
        />
        <div 
          className="comments__content"
          contentEditable 
          html={content} 
          onChange={e => this.handleContentChange(e)}
          placeHolder="Enter your comments"
        />
      </div>
    )
  }
}
