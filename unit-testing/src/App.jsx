import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [username, setUserName] = useState("");
  const [data, setData] = useState("")
  const Click = () => {
    setData(username)
    console.log(`new username is ${data}`)
  };
  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <input type="text" data-testid="input" name="username" onChange={handleChange} />
      <h2 data-testid="output">{username}</h2>
      <button data-testid="button" onClick={Click}>Click</button>
    </div>
  );
}

export default App;
