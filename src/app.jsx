import React, { useState } from "react";
import Greeting from "./component/Greeting";
import Badge from "react-bootstrap/Badge";
const App = () => {
  const [name, setName] = useState("Anonymous");
  return (
    <>
      <input
        onChange={({ target: { value } }) => setName(value)}
        placeholder="Enter your name"
      />
      <Badge variant="secondary">Try entering Shaun or Manik</Badge>
      <Greeting name={name} />
    </>
  );
};

export default App;
