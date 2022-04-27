import React, { useState } from 'react'
import './App.css';
import Card from './components/cards'
import WishList from './components/WishList'
import swal from 'sweetalert';

function App() {

  const imgUrl = [
    // LOGO
    "https://cdn-icons.flaticon.com/png/128/3012/premium/3012458.png?token=exp=1650409256~hmac=7d7982960bafcabbdd3d1092e0ade910",
    // FOTOS DOS PRODUTOS
    "https://decathlonpro.vteximg.com.br/arquivos/ids/2857721-500-500/-bola-wilson-nba-authentic-inoutdoor-71.jpg?v=637649889135000000",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpUkm0zDtiEJtog2jlrfcNYdTm53FIV-HW6A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFFMMcIF7LE3mwozA0tIqKLpmqfHduiScAg&usqp=CAU",
    "https://static.netshoes.com.br/produtos/bola-de-handebol-penalty-suecia-h2l-pro-4/96/032-0595-096/032-0595-096_zoom1.jpg?ts=1647929794"
  ]

  const [items, setItems] = useState([]);

  function addProduct(item) {
    const itemsCopy = Array.from(items);
    // VERIFICA SE O ITEM É REPETIDO
    if (items.find(e => e.value === item)) {
      swal("Esse produto já está na sua lista de desejos", "", "warning");
    } else {
      // ADICIONA O PRODUTO NA LISTA
      itemsCopy.push({ id: items.length, value: item });
      setItems(itemsCopy);
      console.log("Nome: " + item)
      console.log("Storage: " + localStorage)
    }
  }
  // DELETA O PRODUTO DA LISTA
  function deleteProduct(index) {
    const itemsCopy = Array.from(items);
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  }

  return (
    <div className="App">
      <header className="flex">
        <img className="logo" src={imgUrl[0]} alt="Logo" />
        <h1>Balls House</h1>
      </header>
      <div className="container">
        <h2>🛍 Produtos</h2>
        <div className="products flex">
          <Card
            title="Bola de Basquete"
            source={imgUrl[1]}
            price="80.00"
            onSubmit={addProduct}
          />
          <Card
            title="Bola de Vôlei"
            source={imgUrl[2]}
            price="120.00"
            onSubmit={addProduct}
          />
          <Card
            title="Bola de Futebol"
            source={imgUrl[3]}
            price="100.00"
            onSubmit={addProduct}
          />
          <Card
            title="Bola de Handebol"
            source={imgUrl[4]}
            price="65.00"
            onSubmit={addProduct}
          />
        </div>
        <hr />
        <h2>❤ Lista de desejos</h2>
        <table>
          <tbody>
            {/* O MAP RODA TODO O ARRAY, MOSTRANDO OS PRODUTOS NA LISTA DE DESEJOS */}
            {items.map(({ id, value }, index) => (
              <WishList
                key={id}
                ProdName={value}
                onDelete={() => deleteProduct(index)}
              />
            ))}
          </tbody>
        </table>
        <div className="space"></div>
      </div>
    </div>
  );
}

export default App;