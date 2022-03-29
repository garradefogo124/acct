import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [showDate, setShowDate] = useState(false);
  const today = new Date().toLocaleDateString();
  //let showDate = false;

  return (
    <div className="App">
      <Header>
        <h1>Fatec Lab</h1>
      </Header>
      <div className="App-header">
        <p>
          Hello, do you wanna see the date:
        </p>
        <button className="btn" type="button" onClick={() => setShowDate(!showDate)}>
          Yes
        </button>
        {showDate && <p>{today}</p>}
      </div>
    </div>
  );
}

export default App;
