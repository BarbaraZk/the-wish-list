import React from 'react';
import {Container,Row,Col,Button,Form} from "react-bootstrap";
import "./AddTask.css";
class AddTask extends React.Component {
  state = { 
    text:""
  } 
   
  handleTask=(e)=>{
    this.setState({
      text: e.target.value
    })
  }

  handleClick=()=>{
    const {text}= this.state;
    if(this.state.text){
      const addTask = this.props.add(text)
      if(addTask){
        this.setState({
          text:"",
        })
      }}else {
        alert ("please add task")
        }
    }
     
    render() { 
        return (
        <Container>
          <Form >
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={10}> 
                <Form.Control className="inputTask" placeholder="Add Task" type="text" value={this.state.text} onChange={this.handleTask} >
                </Form.Control>
              </Col>
              <Col md={2} className="d-flex justify-content-center align-items-center">
                <Button onClick={this.handleClick} className="btnAdd" variant="outline-secondary">Add</Button>
              </Col>
            </Row>
          </Form>
        </Container>);
    }
}

 
export default AddTask;
