// @flow
import React from 'react';
import styled from 'styled-components';
import Button, { ButtonWrapper } from './Button';
import SpinnerLoading from '../../Common/SpinnerLoading';
import Author from './Author';
import Content from './Content';

type Props = {
  onSubmit: (author: string, content: string) => void,
  isLoading: boolean,
  error: string,
}

type State = {
  isFocus: boolean,
  author: string,
  content: string,
}

const ErrorMessage = styled.p`
  color: red;
  margin: auto 15px;
`;

export default class CommentEditor extends React.PureComponent<Props, State> {
  state: State = {
    isFocus: false,
    author: '',
    content: '',
  };

  isFocusing: boolean = false;

  isFocus: boolean = false;

  componentDidUpdate(prevProps: Props) {
    if (this.isSubmitSuccessful(prevProps)) this.clearInput();
  }

  contentElement: any;

  authorElement: any;

  isSubmitSuccessful(prevProps: Props) {
    const { isLoading, error } = this.props;
    return prevProps.isLoading && !isLoading && error.length === 0;
  }

  clearInput() {
    this.setState({ author: '', content: '' });
  }

  handleFocus(event: any) {
    this.isFocus = event.type === 'focus';
    if (!this.isFocusing) {
      this.isFocusing = true;
      setTimeout(() => {
        this.setState({ isFocus: this.isFocus });
        this.isFocusing = false;
      }, 100);
    }
    if (this.isFocus && this.contentElement !== event.target) {
      this.authorElement.focus();
    }
  }

  handleAuthorChange(e: any) {
    this.setState({ author: e.target.value });
  }

  handleContentChange(e: any) {
    this.setState({ content: e.target.value });
  }

  render() {
    const { isFocus, author, content } = this.state;
    const { isLoading, error, onSubmit } = this.props;
    const focusClazz = isFocus ? 'focus' : 'unfocus';
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
        <div className={`comments__form comments__form--${focusClazz}`}>
          <Author
            innerRef={(e) => { this.authorElement = e; }}
            value={author}
            onChange={e => this.handleAuthorChange(e)}
          />
          <Content
            innerRef={(e) => { if (!this.contentElement) this.contentElement = e.htmlEl; }}
            html={content}
            onChange={e => this.handleContentChange(e)}
          />
          <ButtonWrapper>
            <Button onClick={() => onSubmit(author, content)} disabled={isLoading}>
              Publish Comment
            </Button>
            { isLoading && <SpinnerLoading /> }
            { error && <ErrorMessage>{ error }</ErrorMessage> }
          </ButtonWrapper>
        </div>
      </div>
    );
  }
}
