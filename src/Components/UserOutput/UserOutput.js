import React, { Component } from 'react';


const UserOutput = (props)=>  {
  
    return (
      <div className="UserOutput">
        <p > Username: {props.userName} </p>
        <p> This is a second user output</p> 
       </div>
    );
  }

export default UserOutput;
