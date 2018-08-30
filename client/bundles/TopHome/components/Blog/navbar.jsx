// @flow
import React from "react"
import { Link } from 'react-router-dom'

type Props = {
  className: string,
  editMode: boolean,
  onEditBlog: Function,
  isAuth: boolean,
}

export default class NavBar extends React.PureComponent<Props> {
  render() {
    const { className, onEditBlog, editMode, isAuth } = this.props
    return (
      <nav className={"navbar navbar-expand-lg navbar-light sticky-top " + className}>
        <button className="btn btn-outline-secondary navbar__button">
          <i className="lnr lnr-thumbs-up navbar__thumb-up"></i>
          subscribe
        </button>
        <p className="navbar-brand navbar__title">
          READ MY BLOGS
        </p>
        <span className="navbar__utility">
          {
            editMode && isAuth && 
            <span className="lnr lnr-magic-wand navbar__edit-blog" onClick={onEditBlog}></span> 
          }
          {
            isAuth &&
            <Link to="/blogs/new" className="lnr lnr-pencil navbar__write-blog"></Link>
          }
          <span 
            className="lnr lnr-magnifier navbar__search" 
            onClick={e => alert("I'm working on it, comming soon!")}/>
        </span>
      </nav>
    )
  }
}
