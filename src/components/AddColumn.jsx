import React, { useState } from 'react';

import AddColumnButton from './AddColumnButton';
import AddColumnForm from './AddColumnForm';


function AddColumn() {
        const [show,setShow] =useState()

    return (
                <div  className="col-3">
                   {show?<AddColumnForm setShow={setShow}/>:null}
                   {show?null:<AddColumnButton setShow={setShow}/>}
                </div>
            );
}

export default AddColumn;