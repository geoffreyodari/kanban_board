
import AddTaskButton from "./AddTaskButton";
import AddTaskForm from "./AddTaskForm";
import ColumnTitle from "./ColumnTitle";
import ColumnTitleForm from "./ColumnTitleForm";
import Task from "./Task"


function Column(props){
    return(
        <div className="col-3">
            <div className="card m-3" >
            {!props.editTitle?<ColumnTitle key={props.id} {...props}/>:<ColumnTitleForm key={props.id} {...props}/>}
                <hr/>
                <div className="card-body">
                {props.tasks.map(task=><Task  key={task.id}{...task}/>)}
                </div>
                <hr/>
                {!props.addTask?<AddTaskButton {...props}/>:<AddTaskForm {...props}/>}
            </div>
        </div>
    )
}

export default Column;