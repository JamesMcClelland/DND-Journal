import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestForm from "./QuestForm";
import {Quest} from "./types/Quest";
import {QuestStatus} from "./types/QuestStatus";

const status: QuestStatus = {
  id: 1,
  status: "pending"
}

const quest: Quest = {
  id: 1,
  name: "The search for the pizza",
  status: status
}

class App extends React.Component {
  render () {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <QuestForm  />
        </a>
      </header>
    </div>;
  }
}

export default App;
