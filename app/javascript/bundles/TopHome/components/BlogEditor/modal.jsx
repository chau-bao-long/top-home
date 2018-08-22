// @flow
import * as React from "react"
import ReactDropzone from "react-dropzone"

type Props = {
  onPickPhoto: (Array<{}>) => void,
  photos: Array<string>,
  id: string,
}

export default class Modal extends React.PureComponent<Props> {
  render() {
    const { onPickPhoto, id, photos } = this.props
    return (
      <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="dragDropTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered mw-100 w-50" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Insert your photos</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <ReactDropzone onDrop={(file) => onPickPhoto(file)} >
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                  <p>Drop you photo here !!</p>
                  <p>or click to pick one</p>
                </div>
              </ReactDropzone>
              {
                photos.map(photo => (
                  <p>photo</p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
