import { useState } from "react";
import "./App.css";

// COMPONENTES
import Header from "./components/header";
import Footer from "./components/footer";
import data from "./components/prod_data";

// IMAGENS
import Cart from "./assets/shopping-cart.png";
import Empty from "./assets/empty-cart.svg";

// PLUGINS
import swal from "sweetalert"; // Alerts

// VARIÁVEIS
let qtd = 1;
let discount = 0;
let percentage = "0%";
let total = 0;

function App() {
  // STATE DO CARRINHO
  const [cart, setCart] = useState([
    { id: 0, title: "", price: 0, quantity: 0 },
  ]);

  // ADICIONA O PRODUTO NO CARRINHO
  const addToCart = (id: number, title: string, price: number) => {
    const newProduct = [{ id: id, title: title, price: price, quantity: qtd }];

    if (cart.find((e) => e.id === id) === undefined) {
      if (cart != null) {
        setCart([...cart, ...newProduct]);
      } else {
        setCart([...newProduct]);
      }
      total += newProduct[0].price * newProduct[0].quantity;
      discountCalc();
    } else {
      swal(
        "Esse produto já está no seu carrinho!",
        "Você pode alterar a quantidade dele no próprio carrinho",
        { icon: "warning" }
      );
    }
  };

  // CALCULA O DESCONTO SOBRE O TOTAL
  const discountCalc = () => {
    if (total > 350) {
      discount = total * 0.1;
      percentage = "10%";
    } else {
      discount = 0;
      percentage = "0%";
    }
  };

  const sub = (index: number) => {
    let vetor = Array.from(cart);
    if (vetor[index].quantity > 1) {
      // DIMINUIR QUANTIDADE DO PRODUTO
      vetor[index].quantity--;
      setCart(vetor);
      total -= vetor[index].price;
      discountCalc();
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
          total -= vetor[index].price;
          discountCalc();
        } else {
          swal("Seu produto continua no carrinho!", { icon: "success" });
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
      total += vetor[index].price;
      discountCalc();
    } else {
      // AVISA QUE O LIMITE DE QUANTIDADE FOI ATINGIDO
      swal(
        "Limite de quantidade atingido!",
        "Você pode adicionar no máximo 15 produtos do mesmo tipo",
        { icon: "warning" }
      );
    }
  };

  // FINALIZA A COMPRA E LIMPA O CARRINHO
  const finish = () => {
    const itemsCopy = Array.from(cart);
    itemsCopy.splice(1);
    setCart(itemsCopy);
    total = 0;
    discount = 0;
    percentage = "0%";
    swal(
      "Compra realizada com sucesso!",
      "Obrigado por comprar conosco, volte sempre!",
      { icon: "success" }
    );
  };

  return (
    <>
      {/* CABEÇALHO DO SITE */}
      <Header />
      {/* IMAGEM INICIAL, COM TEXTURA */}
      <div className="texture" />
      <div className="hero" />
      {/* CONTEÚDO DA PÁGINA */}
      <div className="container">
        <h1>
          Encontre todos os equipamentos <br /> e acessórios de vôlei bem aqui
        </h1>
        <div className="products">
          {/* LISTA TODOS OS PRODUTOS DENTRO DE CARDS */}
          {data.map(({ id, image, title, price }) => (
            <div className="card" key={id}>
              <img src={image} alt={title} width={200} height={200} />
              <h3>{title}</h3>
              <h4>R$ {price.toFixed(2)}</h4>
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
        <hr /> {/* DIVISÓRIA DE SEÇÕES - PRODUTOS/CARRINHO */}
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
        <div className="my-cart" id="cart">
          {/* MOSTRA O CARRINHO DE COMPRAS */}
          {cart.length > 1 ? (
            <>
              <table>
                {/* CABEÇALHO DA TABELA */}
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Preço Uni.</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                {/* CONTEÚDO DA TABELA */}
                <tbody>
                  {cart.map(
                    (item, index) =>
                      item.id > 0 && (
                        <tr key={index}>
                          <th>{item.title}</th>
                          <th>R$ {item.price.toFixed(2)}</th>
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
                          <th>R$ {(item.price * item.quantity).toFixed(2)}</th>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
              {/* EXIBIÇÃO DO DESCONTO E DO VALOR FINAL */}
              <div className="final-values">
                <p>
                  Desconto: R$ {discount.toFixed(2)} - {percentage}
                </p>
                <p>Total: R$ {(total - discount).toFixed(2)}</p>
                <span>*Compras acima de R$350,00 tem um desconto de 10%</span>
              </div>
              <div className="finalize">
                <button onClick={() => finish()}>Finalizar compra</button>
              </div>
            </>
          ) : (
            // CASO ESTEJA VAZIO, APARECE UMA MENSAGEM DE CARRINHO VAZIO
            <div className="empty-cart">
              <img src={Empty} alt="Carrinho vazio" width={250} />
              <br />
              <h3>O carrinho está vazio!</h3>
            </div>
          )}
        </div>
      </div>
      {/* RODAPÉ DO SITE */}
      <Footer />
    </>
  );
}
export default App;
