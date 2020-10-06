import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
const Greeting = ({ name }) => {
  return (
    <>
      <Alert variant="danger">
        <h1>Hi {name}, Have a good day.</h1>
      </Alert>
      {
        {
          Manik: (
            <Alert variant="secondary">
              <h1>{name} is a student.</h1>
            </Alert>
          ),
          Shaun: (
            <Alert variant="success">
              <h1>{name} is a professor.</h1>
            </Alert>
          ),
        }[name]
      }
    </>
  );
};

export default Greeting;
