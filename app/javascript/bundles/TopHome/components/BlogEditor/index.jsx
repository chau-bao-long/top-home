// @flow
import React from "react"
import SimpleMDE from "simplemde"
import { NavLink } from "react-router-dom"
import type { Blog } from "../../services/restClient/models/blog"

type Props = {
  onSave: (title: string, body: string) => void,
  isSaving: boolean,
  errorMsg: string,
  savedTime: string,
  blog: Blog;
}
type State = {
  title: string,
}

export default class BlogEditor extends React.PureComponent<Props, State> {
  editor: SimpleMDE
  timerId: window

  constructor(props: Props) {
    super(props)
    this.state = { title: "" }
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  componentDidMount() {
    this.initEditor()
    this.setupAutoSave()
    this.setState({title: this.props.blog.title})
    this.editor.value(this.props.blog.body)
  }

  handleTitleChange(e: any) {
    this.setState({title: e.target.value})
  }

  handleSaveButton(e: SyntheticEvent<>) { this.saveBlog() }

  initEditor() {
    this.editor = new SimpleMDE({
      element: document.getElementById("blog-area"),
      spellChecker: true,
      autofocus: true,
    });
  }

  setupAutoSave() {
    this.timerId = setInterval(() => this.saveBlog(), 30000)
  }

  saveBlog() {
    this.props.onSave(this.state.title, this.editor.value())
  }

  render() {
    const { isSaving, errorMsg, savedTime } = this.props
    const { title } = this.state
    return (
      <div>
        {
          isSaving && <div className="progress">
            <div className="progress__bar"></div>
          </div>
        }
        <div className="title">
          <input 
            className="form-control title__input" 
            type="text" 
            placeholder="Enter the title"
            value={title}
            onChange={(e: any) => this.handleTitleChange(e)}/>
          <p className="title__saved-time">{savedTime}</p>
          <NavLink to="/blogs" className="title__back btn btn-secondary">back</NavLink>
        <button className="title__save btn btn-info" onClick={(e) => this.handleSaveButton(e)}>save</button>
      </div>
      <textarea id="blog-area"/>
    </div>
    )
  }
}
