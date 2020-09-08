import React, {  useState } from 'react';
import Axios from "axios"
import './App.css';

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import UserCard from "./UserCard";

const App = () => {
  //const myapp = ["one","two","two"]
  const [query, setQuery] = useState("");
 // const [user, setUser] = useState(null);
  const [users, setList] = useState([])

  const getDetails = async () => {
    console.log("button pressed")
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      //setUser(data);
      const temp = users
      temp.push(data);
      setList(temp.reverse())
      setQuery("")
      console.log({data})
    } catch (eror) {
     console.log(eror.message);
    }
  
  };

  return (
    
     <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Enter the username"
            />
            <InputGroupAddon addonType="append">
              <Button onClick={getDetails} color="danger">
                GetUser
              </Button>
            </InputGroupAddon>
          </InputGroup>
          {
            users.map((user) => (
             
                <ul key={ user.id }>
                {
                 <UserCard user={user}/>
                }
                </ul>
              
            ))
          }
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
