import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Text from './components/Text';
import Welcome from './Aula4/class'

function App() {
  const [showDate, setShowDate] = useState(false);
  const today = new Date().toLocaleDateString();
  //let showDate = false;

  return (
    <div className="App">
      <Header>
        <h1>Fatec Lab - Aula 3</h1>
      </Header>
      <div className="App-header">
        <p>
          Hello, do you wanna see the date:
        </p>
        <button className="btn" type="button" onClick={() => setShowDate(!showDate)}>
          Yes
        </button>
        {showDate && <p>{today}</p>}
        <br />
        <br />
      </div>


      <Text message='Aula 4' bolder={true}/>
      <Text message='Componente de texto'/>

      <Welcome name='Micael'/>

    </div>
  );
}

export default App;
