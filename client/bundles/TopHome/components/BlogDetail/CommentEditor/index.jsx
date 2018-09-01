// @flow
import React from "react"
import Button from "./Button"
import Title from "./Title"
import Content from "./Content"

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

  titleElement: any
  contentElement: any
  isFocusing: boolean = false
  isFocus: boolean = false

  handleFocus(event: any) {
    this.isFocus = event.type == "focus"
    if (!this.isFocusing) {
      this.isFocusing = true
      setTimeout(() => {
        this.setState({isFocus: this.isFocus})
        this.isFocusing = false
      }, 100)
    }
    if (this.isFocus && this.contentElement.htmlEl != event.target) {
      this.titleElement.htmlEl.focus()
    }
  }

  handleTitleChange(e: any) {
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
        onFocus={e => this.handleFocus(e)}
        onBlur={e => this.handleFocus(e)} 
      >
        <p className={`comments__edit-hint comments__edit-hint--${focusClazz}`}>
          Write a comment...
        </p>
        <div className={`comments__form comments__form--${focusClazz}`} >
          <Title
            ref={e => this.titleElement = e}
            html={title}
            onChange={e => this.handleTitleChange(e)}
          />
          <Content
            html={content}
            ref={e => this.contentElement = e}
            onChange={e => this.handleContentChange(e)}
          />
          <Button onClick={e => this.props.onSubmit(title, content)}>
            Publish Comment
          </Button>
        </div>
      </div>
    )
  }
}
