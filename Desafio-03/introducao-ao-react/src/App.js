import './App.css';
import Btn from './components/num-btn';
import OpBtn from './components/operations-btn';

function App() {
  
  return (
    <div className="container">
      <h1>Calculadora 2.0</h1>
      <form className="calc" name="calculator">
        <input type="text" name="result" className="field" disabled/>
        <OpBtn value="C" name="clean"/>
        <br />
        <Btn value="1" name="n1"/>
        <Btn value="2" name="n2"/>
        <Btn value="3" name="n3"/>
        <OpBtn value="+" name="plus"/>
        <br />
        <Btn value="4" name="n4"/>
        <Btn value="5" name="n5"/>
        <Btn value="6" name="n6"/>
        <OpBtn value="-" name="less"/>
        <br />
        <Btn value="7" name="n7"/>
        <Btn value="8" name="n8"/>
        <Btn value="9" name="n9"/>
        <OpBtn value="*" name="mult"/>
        <br />
        <Btn value="." name="dot"/>
        <Btn value="0" name="n0"/>
        <OpBtn value="/" name="div"/>
        <OpBtn value="=" name="equal"/>
        <h6>Micael Miranda Inácio</h6>
      </form>
    </div>  
  );
}

export default App;
