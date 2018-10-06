// @flow
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import type { Blog } from '../../models/blog';
import SocialComponent from './Social';
import CommentComponent from './Comment';
import { breakpoint } from '../../vars/helper';

type Props = {
  blog: Blog,
  comment: Object,
  onClap: (blogId: number) => void,
  onCommentSubmit: (blogId: number, author: string, content: string) => void,
}

type State = {
  isClap: boolean,
}

const Wrapper = styled.div`
  width: 75%;
  display: inline-block;
  float: left;
  ${breakpoint.sm`width: 100%;`}
`;

const Title = styled.h2`
  margin-bottom: 60px;
`;

export default class BlogDetail extends React.PureComponent<Props, State> {
  state: State = {
    isClap: false,
  }

  handleCommentSubmit = (author: string, content: string) => {
    const { onCommentSubmit, blog } = this.props;
    onCommentSubmit(blog.id, author, content);
  }

  handleClapClick() {
    const { isClap } = this.state;
    const { onClap, blog } = this.props;
    if (isClap) return;
    this.setState({ isClap: true });
    setTimeout(() => this.setState({ isClap: false }), 800);
    onClap(blog.id);
  }

  render() {
    const { blog, comment } = this.props;
    const { isClap } = this.state;
    if (!blog) return null;
    return (
      <Wrapper>
        <Title>{blog.title}</Title>
        <ReactMarkdown className="blog-details__markdown" source={blog.body} />
        <SocialComponent
          blog={blog}
          commentCount={comment.comments.length}
          isClap={isClap}
          onClap={() => this.handleClapClick()}
        />
        <CommentComponent comment={comment} onCommentSubmit={this.handleCommentSubmit} />
      </Wrapper>
    );
  }
}
