import logo from './logo.svg';
import './App.css';
import { FaBeer } from 'react-icons/fa';
import { AiFillAppstore } from "react-icons/ai";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

    <h3> Lets go for a <FaBeer />? </h3>

    <AiFillAppstore />
          
        </a>
      </header>
    </div>
  );
}

export default App;

