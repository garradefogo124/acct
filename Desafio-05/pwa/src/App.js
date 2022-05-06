import React, { useState } from 'react'
import './App.css'

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target[0].value;

    fetch('https://pokeapi.co/api/v2/pokemon/' + searchTerm)
      .then(response => response.json())
      .then(function (data) {
        setResults(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <form onSubmit={handleSearch}>
        <input className="search" type="text" placeholder="Busque um pokemon" />
        <button type="submit">Buscar</button>
      </form>

      {results ?
        <div className="result">
          <div className="card">
            <h2>
              {results.order} - {results.name}
            </h2>
            <img className="sprite" src={results.sprites.front_default} alt={results.name} />
            <p className="weight">
              Peso: {results.weight}kg
              <br />
              Altura: {results.height} m
            </p>
          </div>
        </div>

        : <h3>Pokemon não encontrado</h3>
      }
    </div >
  )
}

export default App;