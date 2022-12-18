import React from 'react'

function ColumnTitleForm(){
    return(<React.Fragment>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput"/>
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div>
                <div className="row">
                    <div className="d-flex flex-row col-6">
                        <button className="btn btn-sm btn-kanban" type="button">Cancel</button>
                    </div>
                    <div className="d-flex flex-row-reverse col-6">
                        <button className="btn btn-sm btn-kanban" type="button">Save</button>
                    </div>  
                </div>
            </div> 
        </React.Fragment>
    )
}
export default ColumnTitleForm;