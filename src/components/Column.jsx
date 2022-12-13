import React from 'react';
import DropDown from './DropDown'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import shortid from 'shortid';
import AddCard from './AddCard'

function Column(props) {
  
  return (
    <div className="col col-3" key={props.data.id}>
      <Card >
        <Card.Body>
          <Card.Title>{props.data.name}<DropDown/></Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {props.data.tasks.map(item=><ListGroup.Item key={shortid.generate()}>{item.name}</ListGroup.Item>)}
        </ListGroup>
        <Card.Body>
          <AddCard column={props.id} columnid={props.columnid}/>
        </Card.Body >
      </Card>
    </div>
  );
}

export default Column;