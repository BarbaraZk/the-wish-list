import React from 'react';
import "./TaskList.css";
import Task from "./Task";
import {Container, ListGroup,Row,Col} from "react-bootstrap";


const TaskList = (props) => {
  const active = props.tasks.filter(task=>task.active===true);
  const done = props.tasks.filter(task=>task.active===false);
 
  if(active.length>2){
  console.log(active)
    active.sort((a,b)=>{
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      if(a < b){
        return -1
      }
      if(a > b){
        return 1
      }
        return 0
  })
  }
  const activeTasks = active.map(task=><Task id={task.id} key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus}/>);
  const doneTasks = done.map(task=><Task id={task.id} key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus}/>)
  return ( 
  <Container>
    <Row className='d-flex justify-content-start align-items-start taskList'>
      <Col md={6}>
        <ListGroup variant="flush" className="toDoTitle">To DO ({active.length})
          <ListGroup.Item className="toDo">
            {active.length >=1 ? activeTasks : ""}
          </ListGroup.Item>  
        </ListGroup>
        </Col>
    <Col md={6}>
    <ListGroup variant="flush" className="doneTitle">DONE ({done.length})
          <ListGroup.Item className="done">
            {done.length >=1 ? doneTasks : ""}
          </ListGroup.Item>  
        </ListGroup>
    </Col>
    </Row>
  </Container> );
}
 
export default TaskList;


