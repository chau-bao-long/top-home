// @flow
import React from "react"
import { Link } from 'react-router-dom'

type Props = {
  className: string
}

export default function NavBar({className}: Props) {
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
        <Link to="/blogs/new" className="lnr lnr-pencil navbar__write-blog"></Link>
        <span className="lnr lnr-magnifier navbar__search"></span>
      </span>
    </nav>
  )
}
