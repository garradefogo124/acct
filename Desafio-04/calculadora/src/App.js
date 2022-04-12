import React, {useState} from 'react';
import './App.css';
import Btn from './components/num-btn';
import OpBtn from './components/operations-btn';
import Display from './components/display';

function App() {
  const [expression, setExpression] = useState(0)
  
  const Add = (n) => {
    if(expression === 0){
      setExpression(n)
    } else {
      setExpression(expression + n)
    }
  }
  
  return (
    <div className="container">
          <h1>Calculadora 2.0</h1>
            <form className="calc">
                <Display value={expression}/>
                  
                <input type="button" class="btn operation" value="C" 
                  onClick={() => setExpression(0)}/>
                <br />
                <Btn value="1" add={Add}/>
                <Btn value="2" add={Add}/>
                <Btn value="3" add={Add}/>
                <OpBtn value="+" add={Add}/>
                <br />
                <Btn value="4" add={Add}/>
                <Btn value="5" add={Add}/>
                <Btn value="6" add={Add}/>
                <OpBtn value="-" add={Add}/>
                <br />
                <Btn value="7" add={Add}/>
                <Btn value="8" add={Add}/>
                <Btn value="9" add={Add}/>
                <OpBtn value="*" add={Add}/>
                <br />
                <Btn value="." add={Add}/>
                <Btn value="0" add={Add}/>
                <OpBtn value="/" add={Add}/>
                <input type="button" class="btn operation" value="=" 
                  onClick={() => setExpression(eval(expression))}/>
                <h6>Micael Miranda Inácio</h6>
            </form>
    </div>  
  );
}

export default App;
