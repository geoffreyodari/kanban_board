
import AddTaskButton from "./AddTaskButton";
import AddTaskForm from "./AddTaskForm";
import ColumnTitle from "./ColumnTitle";
import ColumnTitleForm from "./ColumnTitleForm";


function Column(props){
    return(
        <div className="card bg-white p-1  column-inline m-3" >
          {!props.editTitle?<ColumnTitle key={props.id} {...props}/>:<ColumnTitleForm key={props.id} {...props}/>}
            <hr/>

            <hr/>
            {!props.addTask?<AddTaskButton key={props.id} {...props}/>:<AddTaskForm/>}
        </div>
    )
}

export default Column;