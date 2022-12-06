import React from 'react';
import DropDown from './DropDown'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AddCard from './AddCard'

function Column(props) {
  console.log(props.columnid)
  return (
    <div className="col col-3" key={props.key}>
      <Card >
        <Card.Body>
          <Card.Title>{props.data.name}<DropDown/></Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {props.data.tasks.map((item,index)=><ListGroup.Item key={index}>{item.name}</ListGroup.Item>)}
        </ListGroup>
        <Card.Body>
          <AddCard column={props.key} key={props.key} columnid={props.columnid}/>
        </Card.Body >
      </Card>
    </div>
  );
}

export default Column;