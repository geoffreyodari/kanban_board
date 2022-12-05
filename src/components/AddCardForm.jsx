import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {connect} from 'react-redux'
import { addCard } from '../redux';

function AddCardForm(props) {
    

    return (    <React.Fragment>
                        <div className="bg-white pt-3">
                                <Form.Control size="sm" type="text" placeholder="Add Card" />
                                <div className="row pt-1 ">
                                        <div className="col-6 text-start">
                                                <Button  variant="danger" size="sm" onClick={()=>props.setShow(false)}>
                                                        Cancel
                                                </Button>
                                        </div>
                                        <div className="col-6 text-end">
                                                <Button variant="success" size="sm" onClick={props.addCard}>
                                                        Add 
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
            addCard:()=> dispatch(addCard())
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(AddCardForm)
