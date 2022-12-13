import React from 'react'
import AddColumn from "./AddColumn";
import Column from "./Column";
import shortid from 'shortid';
import {connect} from 'react-redux'


function ColumnContainer(props) {
    
  return (
    
    <div className="container-fluid row bg-light vh-100">
        {props.state.map((item,index)=><Column data={item} id={shortid.generate()} columnid={index}/>)}
        <AddColumn />
    </div>
  )
}


const mapStateToProps = state=>{
    return {
        state
    }
}


export default connect(mapStateToProps)(ColumnContainer)