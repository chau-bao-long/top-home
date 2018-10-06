// @flow
import React from 'react';
import styled from 'styled-components';
import type { Blog } from '../../models/blog';
import altImg from '../../images/ironman.png';
import { breakpoint } from '../../vars/helper';

type Props = {
  blogs: Array<Blog>,
}

const Container = styled.div`
  padding-left: 80px;
  width: 25%;
  float: left;
  position: sticky;
  top: 140px;
  right: 0;
  ${breakpoint.sm`display: none;`}
`;

const Title = styled.h3`
  border-bottom: 1px solid black;
  padding: 10px 0;
  font-size: 1.2em;
`;

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Thumbnail = styled.img`
  object-fit: cover;
  width: 92px;
  height: 92px;
  margin-right: 10px
`;

const BlogTitle = styled.h6``;

export default function furtherReading({ blogs }: Props) {
  return (
    <Container>
      <Title>Further reading</Title>
      {
        blogs.map(blog => (
          <Content key={blog.id}>
            <Thumbnail src={blog.thumbnail} onError={(e) => { e.target.src = altImg; }} />
            <BlogTitle>{blog.title}</BlogTitle>
          </Content>
        ))
      }
    </Container>
  );
}
