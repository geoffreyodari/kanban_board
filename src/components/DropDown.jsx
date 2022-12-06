import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function dropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" size="sm" align="end" id="dropdown-basic">
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as="button">Rename</Dropdown.Item>
        <Dropdown.Item as="button">Clear</Dropdown.Item>
        <Dropdown.Item as="button">Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default dropDown