// @flow
import * as React from "react"

type Props = {
  children?: React.Node,
  id: string,
}

export default class Modal extends React.Component<Props> {
  render() {
    const { children, id } = this.props
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
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
