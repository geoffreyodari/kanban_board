import {useDispatch } from "react-redux";
import {show} from '../redux/column/formSlice'

function AddColumnButton(){
    
    const dispatch = useDispatch()


    return(
            <div className="d-grid ">
                <button className="btn btn-kanban" type="button" onClick={()=>dispatch(show())}>Add Column</button>
            </div>
             )
}
export default AddColumnButton;