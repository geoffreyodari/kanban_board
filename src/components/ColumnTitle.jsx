import { useDispatch } from "react-redux";
import { showEditTitleForm } from "../redux/column/columnSlice";

function ColumnTitle(props){
    console.log(props)
    const dispatch = useDispatch()
    return(
            <div className="row bg-white pt-1 m-0">
                    <div className="col-8">{props.title}</div>
                        <div className="col-4">
                        <div className="btn-group ">
                            <button type="button" className="btn btn-kanban dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            </button>
                            <ul className="dropdown-menu">
                            <li><button className="dropdown-item" onClick={()=>dispatch(showEditTitleForm (props))}>Rename</button></li>
                            <li><button className="dropdown-item">Delete</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
}
export default ColumnTitle;