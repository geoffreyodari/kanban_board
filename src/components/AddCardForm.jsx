import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

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
                                                <Button variant="success" size="sm" onClick={()=>props.setShow(false)}>
                                                        Add 
                                                </Button>
                                        </div>
                                </div>
                        </div>     
                </React.Fragment>   

            )
    }

export default AddCardForm;