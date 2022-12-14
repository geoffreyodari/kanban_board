import AddColumnButton from "./AddColumnButton";
import AddColumnForm from "./AddColumnForm";

function ColumnFormContainer(){
    return(
        <div className="col-3">
            <AddColumnButton/>
            <AddColumnForm/>
        </div>
    )
}

export default ColumnFormContainer;