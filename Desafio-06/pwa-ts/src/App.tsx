import React, { useState } from "react";
import "./App.css";
import Click from "./assets/click.png";

// === APIs Usadas ===
// INFORMAÇÕES ALEATÓRIAS: https://asli-fun-fact-api.herokuapp.com/
// IMAGENS ALEATÓRIAS: https://random.responsiveimages.io/

interface Fact {
  data: {
    fact?: string;
    cat?: string;
    hits?: string;
  };
}

let RandomImg: string;
let change = 300;

const App: React.FC<React.HTMLProps<Element>> = function () {
  const [factInfo, setFactInfo] = useState<Fact>({
    data: {
      fact: "",
      cat: "",
      hits: "",
    },
  });
  RandomImg = "https://random.imagecdn.app/" + change + "/150";

  const getFact = async () => {
    try {
      const response = await fetch(`https://asli-fun-fact-api.herokuapp.com/`);
      const data = await response.json();

      setFactInfo(data);

      change--;
      RandomImg = "https://random.imagecdn.app/" + change + "/150";
    } catch (error) {
      console.log("error>>", error);
    }
  };

  return (
    <div className="App">
      <h1>
        ✨Discover✨
        <br />
        something new
      </h1>

      <button className="btn" onClick={() => getFact()}>
        <img src={Click} alt="Clique" />
      </button>

      <br />
      <h3>Random Information</h3>
      <div className="Card">
        <p>{factInfo.data.fact}</p>
      </div>
      <br />
      <h3>Random Image</h3>
      <img className="random" src={RandomImg} alt="?" />
    </div>
  );
};

export default App;
