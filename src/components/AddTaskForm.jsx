import { useDispatch } from "react-redux"
import {hideAddTaskForm} from "../redux/column/columnSlice"
import {addTask} from "../redux/column/columnSlice"
import { useState } from "react"
import shortid from "shortid"


function AddTaskForm(props){
    const dispatch = useDispatch()
    const [taskName,setTaskName] = useState()
    const save =()=>{
        dispatch(addTask({...props,taskId:shortid.generate(),value:taskName}))
    }

    return(
        <div className="text-center">
            <div className="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" onChange={e=>setTaskName(e.target.value)}/>
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div>
                <div className="row">
                    <div className="d-flex flex-row col-6">
                        <button className="btn btn-sm btn-kanban" type="button" onClick={()=>dispatch(hideAddTaskForm())}>Cancel</button>
                    </div>
                    <div className="d-flex flex-row-reverse col-6">
                        <button className="btn btn-sm btn-kanban" type="button" onClick={()=>save()}>Save</button>
                    </div>  
                </div>
            </div>  
        </div> 
    )
}

export default AddTaskForm