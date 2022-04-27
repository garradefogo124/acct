import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = e.target[0].value;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      }
    };

    fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + searchTerm, options)
      .then(response => response.json())
      .then(({ data }) => {
        setResults(data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <h1>Minha Radio</h1>
      <form onSubmit={handleSearch}>
        <input className="search" type="text" placeholder="Digite o seu artista favorito..." />
        <button type="submit">Buscar</button>
      </form>

      {results ?

        <div className="item">
          {results.map(result => (

            <div key={result.id}>
              <h2>{result.title}</h2>
              <img src={result.album.cover_medium} alt={result.title} />
              <br />
              <audio controls src={result.preview} />
            </div>

          ))}
        </div>

        : <h3>Busca não encontrada</h3>

      }
    </div>
  )
}

export default App;