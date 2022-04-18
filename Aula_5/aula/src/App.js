import './App.css';
import {useState, useEffect} from 'react'
import Modal from './components/Modal'

function App() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(false);

   useEffect(() => {
     alert('Modal: ' + open)
   }, // Primeiro argumento
   [open] //Segundo argumento --> dependencias
   );


  return (
    <div>

      <menu>
        <h1>Hello,</h1>
        <button onClick={() => setOpen(!open)}>Show/Hide</button>
        <button onClick={() => setCount(count + 1)}>Contar</button>
        <h2>{count}</h2>
      </menu>

      <Modal open={open}/>


    </div>
  );
}

export default App;
