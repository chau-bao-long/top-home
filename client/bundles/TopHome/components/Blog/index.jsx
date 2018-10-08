// @flow
import React from 'react';
import styled from 'styled-components';
import type { Blog } from '../../models/blog';
import Preview from './Preview';
import { breakpoint } from '../../vars/helper';

type Props = {
  blogs: Array<Blog>,
  onClick: Function,
}

const BlogContainer = styled.div.attrs({
  className: 'container-fluid',
})`
  height: 100vh;
`

const BlogList = styled.div.attrs({
  className: 'row',
})`
  overflow: visible;
  margin: 0 35px;

  ${breakpoint.xxs`
  margin: 0 5px;
  `}
`;

export default class BlogComponent extends React.PureComponent<Props> {
  render() {
    const { blogs, onClick } = this.props;
    return (
      <BlogContainer>
        <BlogList>
          {
            blogs.map(blog => (
              <Preview key={blog.id} blog={blog} onClick={onClick} />
            ))
          }
        </BlogList>
      </BlogContainer>
    );
  }
}
