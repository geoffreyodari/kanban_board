import React from 'react';
import DropDown from './DropDown'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AddCard from './AddCard'

function Column(props) {
  return (
    <div className="col col-3">
      <Card >
        <Card.Body>
          <Card.Title>{props.data.name}<DropDown/></Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {props.data.tasks.map((row,key)=><ListGroup.Item key={key}>{row.name}</ListGroup.Item>)}
        </ListGroup>
        <Card.Body>
          <AddCard/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Column;