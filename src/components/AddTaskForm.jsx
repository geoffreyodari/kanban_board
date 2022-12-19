import { useDispatch } from "react-redux"
import {hideAddTaskForm} from "../redux/column/columnSlice"
import {addTask} from "../redux/column/columnSlice"
import { useState } from "react"
import shortid from "shortid"


function AddTaskForm(props){
    const dispatch = useDispatch("")
    const [taskName,setTaskName] = useState("")
    const save =()=>{
            dispatch(addTask({...props,taskId:shortid.generate(),value:taskName}))
    }

    return(
        <div className="text-center m-1">
            <div className="form-floating m-1">
                <input type="text" class="form-control" id="floatingInput" onChange={e=>setTaskName(e.target.value)}/>
                <label htmlFor="floatingInput">Name</label>
                {taskName.length===0?<small className="text-danger"> Please provide a valid name</small>:null}
            </div>
            <div>
                <div className="row">
                    <div className="d-flex flex-row col-6">
                        <button className="btn btn-sm btn-kanban" type="button" onClick={()=>dispatch(hideAddTaskForm())}>Cancel</button>
                    </div>
                    <div className="d-flex flex-row-reverse col-6">
                        <button className="btn btn-sm btn-kanban" type="button" onClick={()=>taskName.length>0?save():null}>Save</button>
                    </div>  
                </div>
            </div>  
        </div> 
    )
}

export default AddTaskForm