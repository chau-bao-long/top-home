// @flow 
import { createSelector } from "reselect"
import type { Blog } from "../models/Blog"

const blogSelector = state => state.blog

const commentSelector = state => state.comments

const getSelectedBlogId = (state, props) => {
  let matched = props.location.pathname.match(/^\/blogs\/(\d+)/)
  return matched ? matched[1]: ""
}

export const getSelectedBlog = createSelector(
  blogSelector, getSelectedBlogId,
  (blog, id) => blog.blogs.find(item => item.id == id) || blog.blog,
)

const isRenderDetail = (state, props) => !props.match.isExact

const isAuthFromCookies = (state, props) => !!(props.allCookies && props.allCookies["is_auth"])

const blogWithThumbnailSelector = createSelector(
  blogSelector, commentSelector,
  (blog, comments) => ({
    ...blog,
    blogs: blog.blogs.map(b => ({
      ...b,
      thumbnail: getPreviewImg(b),
      comments
    })),
  })
)

function getPreviewImg(blog: Blog) {
  try {
    const url = blog.body.match(/!\[.*\](.*)/g)[0].match(/\(.*\)/g)[0]
    return url.substring(1, url.length - 1)
  } catch (e) {
    return ""
  }
}

export const selector = createSelector(
  getSelectedBlogId, getSelectedBlog, blogWithThumbnailSelector, isRenderDetail, isAuthFromCookies,
  (selectedBlogId, selectedBlog, blog, isRender, isAuth) => ({
    ...blog,
    blog: selectedBlog,
    blogId: selectedBlogId,
    isRenderDetail: isRender,
    isAuth: isAuth,
  })
)