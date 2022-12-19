import {useDispatch } from "react-redux";
import {show} from '../redux/column/formSlice'

function AddColumnButton(){
    
    const dispatch = useDispatch()


    return(
        
                <div className="card p-2  m-3">
                    <button className="btn btn-kanban" type="button" onClick={()=>dispatch(show())}>Add Column</button>
                </div>
           
             )
}
export default AddColumnButton;