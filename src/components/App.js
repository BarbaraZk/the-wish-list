import React from 'react';
import AddTask from "./AddTask";
import TaskList from './TaskList';
import "./App.css";
import {Container,Row,Col} from "react-bootstrap";

class App extends React.Component {
  counter =0
  state = { 
    tasks:[]
   } 

  addTask=(text)=>{
    const task = {id:this.counter, name:text, active:true}
    this.counter++
    let tasks =[...this.state.tasks]
    tasks.push(task)
    this.setState({
      tasks
    })
    console.log(task)
    return true
   }

   deleteTask=(id)=>{
    let tasks = [...this.state.tasks]
    tasks= tasks.filter(task=>task.id!==id)
    this.setState({
      tasks
    })
   }

   changeStatus=(id)=>{
    let tasks =[...this.state.tasks]
    tasks = tasks.map(item=>{
      if(item.id===id){
        item.active=false;
      }
      return item
    })
    this.setState({
      tasks
    })
   }
   
  render() { 
    return (
      <Container className="app" fluid>
        <Row>
        <div className='title'>TO DO LIST</div>
        </Row>
        <Row>
          <Col>
            <AddTask add={this.addTask}/>
          </Col>
        </Row>
        <Row>
          <Col>
          <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeStatus={this.changeStatus}/>
          </Col>
        </Row>
      </Container>
    )
  }
}
 
export default App;

