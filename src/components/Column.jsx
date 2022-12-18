
import AddTaskButton from "./AddTaskButton";
import AddTaskForm from "./AddTaskForm";
import ColumnTitle from "./ColumnTitle";
import ColumnTitleForm from "./ColumnTitleForm";
import Task from "./Task"


function Column(props){
    return(
        <div className="card bg-white p-1  column-inline m-3" >
          {!props.editTitle?<ColumnTitle key={props.id} {...props}/>:<ColumnTitleForm key={props.id} {...props}/>}
            <hr/>
            {props.tasks.map(task=><Task  key={task.id}{...task}/>)}
            <hr/>
            {!props.addTask?<AddTaskButton {...props}/>:<AddTaskForm {...props}/>}
        </div>
    )
}

export default Column;