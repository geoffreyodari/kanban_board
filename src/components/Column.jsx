import React from 'react';
import DropDown from './DropDown'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import AddCard from './AddCard'

function Column(columns) {
  return (
    <div className="col col-3">
      <Card >
        <Card.Body>
          <Card.Title>{columns.data.name}<DropDown/></Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {columns.data.tasks.map(row=><ListGroup.Item key={row.id}>{row.name}</ListGroup.Item>)}
        </ListGroup>
        <Card.Body>
          <AddCard/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Column;