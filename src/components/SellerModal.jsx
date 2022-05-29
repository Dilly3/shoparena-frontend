import React from 'react'

export default function SellerModal() {
  return (
    <>
    <div className="modal" id="section-settings" tabIndex={-1} role="dialog" aria-labelledby="ultraModal-Label" aria-hidden="true">
  <div className="modal-dialog animated bounceInDown">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 className="modal-title">Section Settings</h4>
      </div>
      <div className="modal-body">
        Body goes here...
      </div>
      <div className="modal-footer">
        <button data-dismiss="modal" className="btn btn-default" type="button">Close</button>
        <button className="btn btn-success" type="button">Save changes</button>
      </div>
    </div>
  </div>
</div>
{/* modal end */}

    </>
  )
}
