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
      <input type="text" name="username" onChange={handleChange} />
      <h2>Username: {username}</h2>
      <button onClick={Click}>Click</button>
    </div>
  );
}

export default App;
