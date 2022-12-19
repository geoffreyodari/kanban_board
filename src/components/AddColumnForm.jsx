import {useDispatch } from "react-redux";
import {hide} from '../redux/column/formSlice'
import {add} from '../redux/column/columnSlice'
import shortid from "shortid";
import { useState } from "react";



function AddColumnForm(){
    const dispatch = useDispatch()
    const [name,setName]= useState("")

    const addColumn=()=>{
            dispatch(add({id:shortid.generate(),title:name}))
            dispatch(hide())
    }
    return(
        <div className="card m-3 p-1 ">
                <div className="text-center form-floating m-1">
                    <input type="text" className="form-control" id="floatingInput" value={name} onChange={e=>setName(e.target.value)}/>
                    <label htmlFor="floatingInput">Name</label>
                    {name.length===0?<small className="text-danger"> Please provide a valid name</small>:null}
                </div>
                <div>
                    <div className="row">
                        <div className="d-flex flex-row col-6">
                            <button className="btn btn-sm btn-kanban" type="button" onClick={()=>dispatch(hide())}>Cancel</button>
                        </div>
                        <div className="d-flex flex-row-reverse col-6">
                            <button className="btn btn-sm btn-kanban" type="button" onClick={()=>name.length>0?addColumn():null}>Save</button>
                        </div>  
                    </div>
                    
                </div>
        </div>

    )
}

export default AddColumnForm;