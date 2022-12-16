import AddColumnButton from "../../components/AddColumnButton";
import AddColumnForm from "../../components/AddColumnForm";
import { useSelector } from "react-redux";

function ColumnForm(){
    const toggle = useSelector(state=>state.form.toggle)
    
    return(
        <div className="column-inline m-3">
          {!toggle?<AddColumnButton/>:<AddColumnForm/>}
        </div>
    )
}

export default ColumnForm;