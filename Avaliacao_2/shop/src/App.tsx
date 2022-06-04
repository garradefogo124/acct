import React, { useState } from "react";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";

import data from "./components/prod_data";
import Cart from "./assets/shopping-cart.png";
import Empty from "./assets/empty-cart.svg";

import swal from "sweetalert";

let total = 0;

function App() {
  const [cart, setCart] = useState([
    { id: 0, title: "", price: 0, quantity: 0 },
  ]);

  const addToCart = (id: number, title: string, price: number) => {
    const newProduct = [{ id: id, title: title, price: price, quantity: 1 }];

    if (cart.find((e) => e.id === id) === undefined) {
      if (cart != null) {
        setCart([...cart, ...newProduct]);
      } else {
        setCart([...newProduct]);
      }
    } else {
      window.alert("Produto já adicionado, id: " + id);
    }
  };

  const sub = (index: number) => {
    let vetor = Array.from(cart);
    if (vetor[index].quantity > 1) {
      // DIMINUIR QUANTIDADE DO PRODUTO
      vetor[index].quantity--;
      setCart(vetor);
    } else {
      // REMOVER PRODUTO, CASO FOR DIMINUIR ABAIXO DE 1
      // ALERTA COM OPÇÕES DE CONFIRMAR OU CANCELAR
      swal({
        title: "Remover produto?",
        text: "Ao confirmar, esse produto será removido do carrinho",
        icon: "warning",
        buttons: ["Cancelar", true],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          const itemsCopy = Array.from(cart);
          itemsCopy.splice(index, 1);
          setCart(itemsCopy);
          swal("Esse produto foi removido do seu carrinho", {
            icon: "success",
          });
        } else {
          swal("Seu produto continua no carrinho!");
        }
      });
    }
  };

  const add = (index: number) => {
    let vetor = Array.from(cart);
    if (vetor[index].quantity < 15) {
      // ADICIONA QUANTIDADE DO PRODUTO
      vetor[index].quantity++;
      setCart(vetor);
    } else {
      // AVISA QUE O LIMITE DE QUANTIDADE FOI ATINGIDO
      swal(
        "Limite de quantidade atingido!",
        "Você pode adicionar no máximo 15 produtos do mesmo tipo"
      );
    }
  };

  return (
    <>
      <Header />
      <div className="texture" />
      <div className="hero" />
      <div className="container">
        <h1>
          Encontre todos os equipamentos <br /> e acessórios de vôlei bem aqui
        </h1>
        <div className="products">
          {data.map(({ id, image, title, price }) => (
            <div className="card" key={id}>
              <img src={image} alt={title} width={200} height={200} />
              <h3>{title}</h3>
              <h4>R$ {price}</h4>
              <div className="add">
                <button onClick={() => addToCart(id, title, price)}>
                  <img src={Cart} alt="Adicionar ao carrinho" width={28} />
                  <p>Adicionar</p>
                </button>
              </div>
            </div>
          ))}
        </div>
        <br />
        <hr />
        <br />
        <h2 className="cart-title">
          <img
            src={Cart}
            alt="Adicionar ao carrinho"
            width={20}
            style={{ marginRight: 16 }}
          />
          Meu carrinho de compras
        </h2>
        <br />
        <div className="my-cart">
          {cart.length > 1 ? (
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço Uni.</th>
                  <th>Quantidade</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(
                  (item, index) =>
                    item.id > 0 && (
                      <tr key={index}>
                        <th>{item.title}</th>
                        <th>R$ {item.price}</th>
                        <th>
                          <button
                            className="operation"
                            onClick={() => sub(index)}
                          >
                            {" "}
                            -{" "}
                          </button>
                          {item.quantity}
                          <button
                            className="operation"
                            onClick={() => add(index)}
                          >
                            {" "}
                            +{" "}
                          </button>
                        </th>
                        <th>R$ {item.price * item.quantity}</th>
                      </tr>
                    )
                )}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Total:</th>
                  <th>R$ {total}</th>
                </tr>
              </tfoot>
            </table>
          ) : (
            <div className="empty-cart">
              <img src={Empty} alt="Carrinho vazio" width={250} />
              <br />
              <h3>O carrinho está vazio!</h3>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;
