import React from 'react'
import { hideEditTitleForm } from '../redux/column/columnSlice';
import {changeColumnTitle} from '../redux/column/columnSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';



function ColumnTitleForm(props){
    const dispatch =useDispatch()
        const [title,setTitle] = useState()
        const save =()=>{
            dispatch(changeColumnTitle({...props,title:title}))
        }

    return(<React.Fragment>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" onChange={e=>setTitle(e.target.value)}/>
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div>
                <div className="row">
                    <div className="d-flex flex-row col-6">
                        <button className="btn btn-sm btn-kanban" type="button" onClick={()=>dispatch(hideEditTitleForm())}>Cancel</button>
                    </div>
                    <div className="d-flex flex-row-reverse col-6">
                        <button className="btn btn-sm btn-kanban" type="button" onClick={()=>save()}>Save</button>
                    </div>  
                </div>
            </div> 
        </React.Fragment>
    )
}
export default ColumnTitleForm;