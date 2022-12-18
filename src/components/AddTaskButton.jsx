import { useDispatch } from "react-redux";
import {showAddTaskForm } from "../redux/column/columnSlice";

function AddTaskButton(props){
    const dispatch = useDispatch()
    return(
        <div class="text-center">
            <button class="btn btn-sm btn-kanban" onClick={()=>dispatch(showAddTaskForm({...props}))}>Add</button>
        </div>
    )
}

export default AddTaskButton;