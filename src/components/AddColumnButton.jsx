import Button from 'react-bootstrap/Button';


function AddColumnButton(props) {

                return (    
                                <div className="d-grid gap-2">
                                        <Button variant="success" size="lg" onClick={()=>props.setShow(true)}>
                                                Add Column
                                        </Button>
                                </div> 
                        )
                }

export default AddColumnButton;