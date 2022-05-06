import React, { useState } from "react";
import "./App.css";

type FormElement = React.SyntheticEvent;

interface Address {
  cep?: string;
  logradouro: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ddd?: number;
}

const App: React.FC<React.HTMLProps<Element>> = function () {
  const [address, setAddress] = useState<Address>({ logradouro: "" });
  const getCEP = async (e: FormElement) => {
    try {
      e.preventDefault();

      const target = e.target as HTMLFormElement;
      const cep = target.cep.value;

      console.log("CEP: ", cep);

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
      const data = await response.json();

      setAddress(data);

      console.log("response", data);
    } catch (error) {
      console.log("error>>", error);
      console.log({ logradouro: "" });
    }
  };

  return (
    <div className="App">
      <h1>Consulta de CEP</h1>
      <div>
        <form onSubmit={(e) => getCEP(e)}>
          <input name="cep" type="text" placeholder="Digite o CEP" autoFocus />
        </form>
      </div>

      <br />
      <div className="info">
        <p>UF: {address.uf}</p>
        <p>CIDADE: {address.localidade}</p>
        <p>BAIRRO: {address.bairro}</p>
        <p>LOGRADOURO: {address.logradouro}</p>
        <p>DDD: {address.ddd}</p>
      </div>
    </div>
  );
};

export default App;
