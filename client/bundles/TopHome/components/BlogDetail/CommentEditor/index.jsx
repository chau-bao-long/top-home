// @flow
import React from "react"
import Button, { ButtonWrapper } from './Button'
import { SpinnerLoading } from './../../Common/SpinnerLoading'
import Author from './Author'
import Content from './Content'

type Props = {
  onSubmit: (author: string, content: string) => void,
  isLoading: boolean,
}

type State = {
  isFocus: boolean,
  author: string,
  content: string,
}

export default class CommentEditor extends React.PureComponent<Props, State> {
  state: State = {
    isFocus: false,
    author: "",
    content: "",
  }

  authorElement: any
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
    if (this.isFocus && this.contentElement != event.target) {
      this.authorElement.focus()
    }
  }

  handleAuthorChange(e: any) {
    this.setState({author: e.target.value})
  }

  handleContentChange(e: any) {
    this.setState({content: e.target.value})
  }

  render() {
    const { isFocus, author, content } = this.state
    const { isLoading } = this.props
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
          <Author
            innerRef={e => { if (!this.authorElement) this.authorElement = e.htmlEl }}
            html={author}
            onChange={e => this.handleAuthorChange(e)}
          />
          <Content
            innerRef={e => { if (!this.contentElement) this.contentElement = e.htmlEl }}
            html={content}
            onChange={e => this.handleContentChange(e)}
          />
          <ButtonWrapper>
            <Button onClick={e => this.props.onSubmit(author, content)}>
              Publish Comment
            </Button>
            { isLoading && <SpinnerLoading /> }
          </ButtonWrapper>
        </div>
      </div>
    )
  }
}
