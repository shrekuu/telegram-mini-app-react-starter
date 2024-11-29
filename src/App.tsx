import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import twaLogo from "./assets/tapps.png";
import WebApp from "@twa-dev/sdk";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://ton.org/dev" target="_blank">
          <img src={twaLogo} className="logo" alt="TWA logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-red-400">
        Vite + React + <span className="text-sky-500">TailwindCSS</span>
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
