// @flow
import React from 'react'
import type { Comment } from '../../../models/comment';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  padding: 16px;
  margin: 20px 0;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0,0,0,.03);
  border: 1px solid rgba(0,0,0,.09);
  background: white;
`

const sharedTextStyle = css`
  color: ${props => props.theme.color.sirocco} !important;
  font-weight: 400;
  font-style: normal;
`

const Author = styled.h6`
  ${sharedTextStyle}
  font-size: 18px;
`

const CommentTime = styled.time`
  ${sharedTextStyle}
  font-size: 14px;
`

const Content = styled.p`
  padding-top: 20px;
  font-size: 20px;
  word-wrap: break-word;
  width: 100%;
`

export default function CommentItem({ comment }: { comment: Comment }) {
  return (
    <Container>
      <Author>{ comment.author }</Author>
      <CommentTime>{ comment.displayTime }</CommentTime>
      <Content>{ comment.content }</Content>
    </Container>
  );
}
