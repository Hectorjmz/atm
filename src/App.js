import './App.css';
import React, { useState } from 'react';
import atmimg from './atm-img.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Row, Col, Container } from 'react-bootstrap';

function App() {

  const [bankAccount, setBankAccount] = useState(2000);
  const [transaction, setTransaction] = useState(0);
  const [variable, setVariable] = useState("");
  const [transactionType, setTransactionType] = useState("");
  
  function submitHandler(event){
    event.preventDefault()
    let operation = 0;
    const trans = parseInt(document.getElementById("formBasicEmail").value)
    
    if(transactionType === "WITHDRAW" && bankAccount >= trans){
      operation = bankAccount - trans;
      setBankAccount(operation);
      setVariable('');
    } else if (transactionType === "DEPOSIT"){
      operation = bankAccount + trans;
      setBankAccount(operation);
      setVariable('');
    } else if (transactionType === ""){
      setVariable('SELECT OPERATION BELOW');
    } else {
      setVariable("NOT ENOUGH MONEY")
    }

  }

  function withdraw(){
    setTransactionType("WITHDRAW")
  }
  
  function cashout(){
    setTransactionType("DEPOSIT")
  }
  
  return (
    <div>
      <Card className='' body="false" style={{width: '600px'}}>
      <Card.Img variant="top" src={atmimg} />
        <Card.Header className="cardHeader">BANK OF THE PEOPLE</Card.Header>
        <Card.Body>
          <Card.Title>Make your operations below</Card.Title>
          
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Text className="text-muted">
            <h2>Your Balance is {bankAccount}</h2>
          </Form.Text>
              <Form.Label>Transaction Type: {transactionType}</Form.Label>
              <Container>
                <Row>
                  <Col>
                    <Form.Control 
                      type="number" 
                      value={transaction} 
                      min="1"
                      step="1"
                      onChange={(event)=>{setTransaction(event.target.value)}}
                    />
                  </Col>
                  <Col>
                  <Button  type="submit">
                    ENTER
                  </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button  onClick={withdraw}>
                      WITHDRAW
                    </Button>
                  </Col>
                  <Col>
                    <Button  onClick={cashout}>
                      DEPOSIT
                    </Button>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Form.Group>
              
              <Form.Text className="text-muted">
                Thank you for choosing us!
              </Form.Text>
              <br /><br />
              <Form.Text className="text-muted">
                <h1>{variable}</h1>
              </Form.Text>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
