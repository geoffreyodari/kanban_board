import { useDispatch } from "react-redux"
import {hideAddTaskForm} from "../redux/column/columnSlice"

function AddTaskForm(){
    const dispatch = useDispatch()
    return(
        <div className="text-center">
            <div className="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput"/>
                <label for="floatingInput">Name</label>
            </div>
            <div>
                <div className="row">
                    <div className="d-flex flex-row col-6">
                        <button className="btn btn-sm btn-kanban" type="button" onClick={()=>dispatch(hideAddTaskForm())}>Cancel</button>
                    </div>
                    <div className="d-flex flex-row-reverse col-6">
                        <button className="btn btn-sm btn-kanban" type="button">Save</button>
                    </div>  
                </div>
            </div>  
        </div> 
    )
}

export default AddTaskForm