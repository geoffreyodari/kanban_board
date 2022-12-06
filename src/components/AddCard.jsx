import AddCardButton from "./AddCardButton";
import AddCardForm from "./AddCardForm";
import {useState} from "react"

function AddCard(props){
    const [show,setShow] =useState()
    return(
        <div className="text-center">
           {show? <AddCardForm setShow={setShow} columnid={props.columnid}/>:<AddCardButton setShow={setShow} columnid={props.columnid}/>}
        </div>
        
    )
}

export default AddCard;