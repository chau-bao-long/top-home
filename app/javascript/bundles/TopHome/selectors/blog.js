// @flow
import { createSelector } from 'reselect'

const blogSelector = state => state.blog

const getSelectedBlogId = (state, props) =>
  props.match.params.blogId

export const getSelectedBlog = createSelector(
  blogSelector, getSelectedBlogId,
  (blog, id) => blog.blogs.find(item => item.id == id),
)

export const selector = createSelector(
  getSelectedBlog, blogSelector,
  (selectedBlog, blog) => ({
    blog: selectedBlog,
    ...blog,
  })
)
