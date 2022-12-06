import React from 'react'
import { Button } from 'react-bootstrap'

function AddCardButton(props) {
  return (
    <Button variant="secondary" size="sm" onClick={()=>props.setShow(true)}>
        Add Card
    </Button>
  )
}

export default AddCardButton