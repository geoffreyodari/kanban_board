import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {connect} from 'react-redux'
import { addColumn } from '../redux';

function AddColumnForm(props) {
    const [title,setTitle] = useState("")

    return (    <React.Fragment>
                        <div className="bg-white pt-3" key="odari">
                                <Form.Control size="sm" type="text" placeholder="Add Column" onChange={e=>setTitle(e.target.value)}/>
                                <div className="row pt-1 pb-1">
                                        <div className="col-6 text-left">
                                                <Button  variant="danger" size="sm" onClick={()=>props.setShow(false)}>
                                                        Cancel
                                                </Button>
                                        </div>
                                        <div className="col-6 text-end">
                                                <Button variant="success" size="sm" onClick={()=>props.addColumn(title)}>
                                                        Add Column
                                                </Button>
                                        </div>
                                </div>
                        </div>     
                </React.Fragment>   

            )
    }

    const mapStateToProps = state=>{
        return {
            state
        }
    }
    
    const mapDispatchToProps = dispatch=>{
        return{
            addColumn:(columnTitle)=> dispatch(addColumn(columnTitle))
        }
    }
    export default connect(mapStateToProps,mapDispatchToProps)(AddColumnForm)
    

