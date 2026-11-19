import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Dropdown = (props) => {
    return (
        <Accordion.Item style={{marginTop: "1rem"}} eventKey={props.ekey}>
            <Accordion.Header>{props.header}</Accordion.Header>
            <Accordion.Body>
                {props.filters.map(item => <div><input type="checkbox" />&nbsp;&nbsp;{item}</div>)}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Dropdown;