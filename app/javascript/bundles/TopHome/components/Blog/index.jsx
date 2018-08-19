// @flow
import React from "react"
import ReactMarkdown from "react-markdown"
import NavBar from "./navbar"
import _ from "lodash"
import type { Blog } from "../../services/restClient/models/blog"
import Preview from "./preview"

type Props = {
  blogs: Array<Blog>,
}

type State = {
  navBarStyle: string,
}

export default class BlogComponent extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      navBarStyle: "",
    }
  }

  render() {
    const { blogs } = this.props
    return (
      <div className="container-fluid">
        <NavBar className={this.state.navBarStyle}/>
        <div className="blogs row" >
          {
            blogs.map(blog => (
              <Preview blog={blog}/>
            ))
          }
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event: SyntheticEvent<>) => {
    let style = (window.scrollY + (this.state.navBarStyle ? 60 : 0)) > 60 ?  "navbar--scrolled" : "" 
    this.setState({navBarStyle: style})
  }
}
