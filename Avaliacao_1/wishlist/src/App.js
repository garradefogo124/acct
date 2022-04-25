import React, {useState} from 'react'
import './App.css';
import Card from './components/cards'
import WishList from './components/WishList'

function App() {

  const [items, setItems] = useState([]);

  function addProduct(item) {
    const itemsCopy = Array.from(items);
    itemsCopy.push({id: items.length, value: item});
    setItems(itemsCopy);
    console.log("Nome: " + item)
  }

  function deleteProduct(index) {
    const itemsCopy = Array.from(items);
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  }

  return (
    <div className="App">
      <header className="flex">
        <img className="logo" src="https://cdn-icons.flaticon.com/png/128/3012/premium/3012458.png?token=exp=1650409256~hmac=7d7982960bafcabbdd3d1092e0ade910" alt="Logo" />
        <h1>Balls House</h1>
      </header>
      <div className="container">
        <h2>🛍 Produtos</h2>
        <div className="products flex">
          <Card 
            title="Bola de Basquete"
            source="https://decathlonpro.vteximg.com.br/arquivos/ids/2857721-500-500/-bola-wilson-nba-authentic-inoutdoor-71.jpg?v=637649889135000000"
            price="80.00"
            onSubmit={addProduct}
          />
          <Card 
            title="Bola de Vôlei"
            source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpUkm0zDtiEJtog2jlrfcNYdTm53FIV-HW6A&usqp=CAU"
            price="120.00"
            onSubmit={addProduct}
          />
          <Card 
            title="Bola de Futebol"
            source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFFMMcIF7LE3mwozA0tIqKLpmqfHduiScAg&usqp=CAU"
            price="100.00"
            onSubmit={addProduct}
          />
          <Card 
            title="Bola de Handebol"
            source="https://static.netshoes.com.br/produtos/bola-de-handebol-penalty-suecia-h2l-pro-4/96/032-0595-096/032-0595-096_zoom1.jpg?ts=1647929794"
            price="65.00"
            onSubmit={addProduct}
          />
        </div>
        <hr />
        <h2>❤ Lista de desejos</h2>
        <table>
          <tbody>
            {items.map(({id, value}, index) => (
              <WishList
                key={id}
                ProdName={value}
                onDelete={() => deleteProduct(index)}
              />
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
