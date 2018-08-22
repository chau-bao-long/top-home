// @flow
import React from "react" 
import { connect } from "react-redux"
import { blogEditorSelector } from "../../selectors/blogEditor"
import ReactDropzone from "react-dropzone"
import { getPhotos, uploadPhoto } from "../../actions/blogEditorAction"

type Props = { 
  onPickPhoto: (string) => void,
  getPhotos: () => {},
}

const MODAL_ID = "dragDropModal"

class ModalContainer extends React.Component<Props> {
  componentDidMount() {
    this.initDragDrop()
    this.props.getPhotos()
  }

  handleDrop(file: File) {
    debugger
  }

  initDragDrop() {
    const uploadButton = document.getElementsByClassName('fa fa-picture-o')[0]
    const toolBar = document.getElementsByClassName('editor-toolbar')[0]
    toolBar.removeChild(uploadButton)
    const newButton = uploadButton.cloneNode()
    newButton.setAttribute("data-toggle", "modal")
    newButton.setAttribute("data-target", `#${MODAL_ID}`)
    toolBar.appendChild(newButton)
  }


  render() {
    return (
      <Modal id={MODAL_ID}>
        <ReactDropzone onDrop={(file) => this.handleDrop(file)} >
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <p>Drop you photo here !!</p>
            <p>or click to pick one</p>
          </div>
        </ReactDropzone>
      </Modal>
    )
  }
}

export default connect(blogEditorSelector, { getPhotos, uploadPhoto })(ModalContainer)
