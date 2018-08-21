// @flow 
import { createSelector } from 'reselect'

const blogSelector = state => state.blog

const getSelectedBlogId = (state, props) => {
  let matched = props.location.pathname.match(/^\/blogs\/(\d+)/)
  return matched ? matched[1]: ""
}

export const getSelectedBlog = createSelector(
  blogSelector, getSelectedBlogId,
  (blog, id) => blog.blogs.find(item => item.id == id) || blog.blog,
)

const isRenderDetail = (state, props) => !props.match.isExact

export const selector = createSelector(
  getSelectedBlogId, getSelectedBlog, blogSelector, isRenderDetail,
  (selectedBlogId, selectedBlog, blog, isRender) => ({
    ...blog,
    blog: selectedBlog,
    blogId: selectedBlogId,
    isRenderDetail: isRender,
  })
)
