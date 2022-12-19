import { useDispatch } from "react-redux";
import { showEditTitleForm } from "../redux/column/columnSlice";
import { deleteColumn} from "../redux/column/columnSlice";

function ColumnTitle(props){
    const dispatch = useDispatch()
    return(
            <div className="row  pt-1 m-1">
                    <div className="col-8 mt-1">{props.title}</div>
                        <div className="col-4">
                        <div className="btn-group ">
                            <button type="button" className="btn btn-kanban dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            </button>
                            <ul className="dropdown-menu">
                            <li><button className="dropdown-item" onClick={()=>dispatch(showEditTitleForm (props))}>Rename</button></li>
                            <li><button className="dropdown-item" onClick={()=>dispatch(deleteColumn(props))}>Delete</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
}
export default ColumnTitle;