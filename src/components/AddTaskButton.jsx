import { useDispatch } from "react-redux";
import {showAddTaskForm } from "../redux/column/columnSlice";

function AddTaskButton(props){
    const dispatch = useDispatch()
    return(
        <div className="text-center">
            <button className="btn btn-sm btn-kanban" onClick={()=>dispatch(showAddTaskForm({...props}))}>Add</button>
        </div>
    )
}

export default AddTaskButton;