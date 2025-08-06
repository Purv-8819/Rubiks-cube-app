import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { pingBackend } from "./api/cubeService";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    pingBackend().then(setMessage).catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>Rubik’s Cube Solver</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
