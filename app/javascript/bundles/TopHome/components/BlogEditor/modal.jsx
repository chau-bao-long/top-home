// @flow
import * as React from "react"
import ReactDropzone from "react-dropzone"

type Props = {
  onUploadPhoto: (Array<{}>) => void,
  onPickPhoto: (string) => void,
  photos: Array<string>,
  id: string,
}

export default class Modal extends React.PureComponent<Props> {
  render() {
    const { onUploadPhoto, id, photos, onPickPhoto } = this.props
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
            <div className="modal-body d-flex flex-column justify-content-center">
              <div className="m-5 mx-auto">
                <ReactDropzone onDrop={(file) => onUploadPhoto(file)} >
                  <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <p>Drop you photo here !!</p>
                    <p>or click to pick one</p>
                  </div>
                </ReactDropzone>
              </div>
              <h5 className="border-bottom pb-2 mx-3">Uploaded photos</h5>
              <div className="gallery">
                {
                  photos.map(photo => (
                    <img 
                      src={photo} 
                      data-dismiss="modal" 
                      aria-label="Close"
                      className="gallery__photo" 
                      onClick={(e) => onPickPhoto(e.target.src)}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
