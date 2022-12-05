import React from 'react'
import AddColumn from "./AddColumn";
import Column from "./Column";
import {connect} from 'react-redux'


function ColumnContainer(props) {
    console.log(props.state)
  return (
    <div className="container-fluid row bg-light vh-100">
        {props.state.map((col,key)=><Column data={col} key={key}/>)}
        <AddColumn/>
    </div>
  )
}


const mapStateToProps = state=>{
    return {
        state
    }
}


export default connect(mapStateToProps)(ColumnContainer)