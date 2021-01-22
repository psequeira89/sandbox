import logo from './logo.svg';
import './App.css';

function App() {

let name = "Phil";

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
        </a>
        <a href="https://www.w3schools.com/react/default.asp" target="_blank" className="App-link"><button type="button">Hello</button></a>
      </header>
    </div>
  );
}

export default App;
