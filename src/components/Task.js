import React from 'react';
import "./Task.css";
import { Container,Row,Col,Button,ListGroup, } from 'react-bootstrap';

const Task = (props) => {
  const {id,name,active} = props.task;
    if(active){
      return ( 
        <Container className='active'>
          <Row>
            <Col md={8}>
              <ListGroup>
                <ListGroup.Item className='activeGroup'>
                  <div className="active">{name}</div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={2} className="d-flex justify-content-center align-items-center ">
              <Button onClick={()=>props.changeStatus(id)} className="btnTask"  variant="outline-secondary"><i class="fa fa-check" aria-hidden="true"></i>
              </Button>
              <Button onClick={()=>props.delete(id)} className="btnTask"  variant="outline-secondary"><i class="fa fa-trash" aria-hidden="true"></i>
              </Button>
            </Col>
          </Row>      
    </Container> );  
    }
    else {
      return(
        <Container className='done'>
          <Row>
            <Col md={8}>
              <ListGroup>
                <ListGroup.Item className='doneGroup'>
                  <div className="done">{name}</div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4} className="d-flex justify-content-start align-items-center">
              <Button onClick={()=>props.delete(id)} className="btnTask " variant="outline-secondary" ><i class="fa fa-trash" aria-hidden="true" ></i>
              </Button>
            </Col>
          </Row>
        </Container>
        )
    }
}
 
export default Task;

