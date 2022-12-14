function AddColumnForm(){
    return(
        <div className="card p-1">
                <div className="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput"/>
                    <label for="floatingInput">Name</label>
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
            </div>

    )
}

export default AddColumnForm;