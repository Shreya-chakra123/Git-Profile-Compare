import React from "react";
import { Card, CardBody } from "reactstrap";
import "./App.css"

const UserCard = ({ user }) => {
  return (
   
     <CardBody className="card">
       <div className="text-primary">Name : {user.name === null ? "No Name" : user.name}</div>
       <div className="text-primary">Public_repos : {user.public_repos}</div>
       <div className="text-primary">Public_gists : {user.public_gists}</div>
      
       <div className="text-info">Followers : {user.followers}</div>
       <div className="text-info">Following : {user.following}</div>
     </CardBody>
    
  );
};

export default UserCard;
