import AddCardButton from "./AddCardButton";
import AddCardForm from "./AddCardForm";
import {useState} from "react"

function AddCard(){
    const [show,setShow] =useState()
    return(
        <div className="text-center">
           {show? <AddCardForm setShow={setShow}/>:<AddCardButton setShow={setShow}/>}
        </div>
        
    )
}

export default AddCard;