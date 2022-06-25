//import { useState, useEffect } from "react";
import "./App.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import { useFetch } from "./hooks/useFetch";
//import { useAnimal, newAnimal } from "./hooks/useAnimal";

interface IAnimal {
  animals: [
    {
      _id: string;
      name: string;
      species: string;
      gender: string;
      imgUrl: string;
      status: string;
    }
  ];
}

function App() {
  // const { animals, getAnimals, newAnimal } = useAnimal();

  // useEffect(() => {
  //   getAnimals();
  // }, [getAnimals]);

  const { data: ani, isFetching } = useFetch<IAnimal>("/animal");
  console.log("animals: ");
  if (ani !== null) console.log(ani.animals[0].name);

  let slidesPerPage = 1;

  if (window.screen.width < 520) {
    slidesPerPage = 1;
  } else if (window.screen.width >= 520 && window.screen.width < 720) {
    slidesPerPage = 2;
  } else if (window.screen.width >= 720 && window.screen.width < 1000) {
    slidesPerPage = 3;
  } else if (window.screen.width > 1000) {
    slidesPerPage = 4;
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Administre seu zoológico!</h1>
        <div className="list-animals">
          <div className="search">
            <h2>Seus animais</h2>
            <form className="find-animal">
              <input type="text" placeholder="Buscar..." />
              <button type="submit">
                <img src="./img/lupa.png" alt="Lupa" width={16} />
              </button>
            </form>
          </div>
          <div className="list">
            {ani !== null ? (
              <Splide
                options={{
                  rewind: true,
                  gap: "1rem",
                  perPage: slidesPerPage,
                }}
              >
                {ani.animals?.map((item, index) => (
                  <SplideSlide key={index}>
                    <Card
                      name={item.name}
                      species={item.species}
                      gender={item.gender}
                      imgUrl={item.imgUrl}
                      status={item.status}
                      id={item._id}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            ) : (
              <div className="not-found">
                <img src="./img/paws.png" alt="Icone not found" width={100} />
                <h3>Nenhum animal encontrado</h3>
              </div>
            )}
          </div>
        </div>
        <div className="forms">
          <div className="create form-col">
            <h2>Novo Animal</h2>
            <form className="form new-animal">
              <input type="text" placeholder="Espécie" />
              <input type="text" placeholder="Nome" />
              <select name="sexo" defaultValue={"default"}>
                <option value="default" disabled hidden>
                  Sexo...
                </option>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
              <input type="text" placeholder="Link da Imagem" />
              <select name="status" defaultValue={"default"}>
                <option value="default" disabled hidden>
                  Status...
                </option>
                <option value="Saudável">Saudável</option>
                <option value="Em recuperação">Em recuperação</option>
                <option value="A caminho">A caminho</option>
              </select>
              <button className="confirm-btn" type="submit">
                Cadastrar
              </button>
            </form>
          </div>

          <div className="line"></div>

          <div className="update form-col">
            <h2>Atualizar animal</h2>
            <form className="form update-animal">
              <input type="text" placeholder="ID" />
              <select name="status" defaultValue={"default"}>
                <option value="default" disabled hidden>
                  Status...
                </option>
                <option value="Saudável">Saudável</option>
                <option value="Em recuperação">Em recuperação</option>
                <option value="A caminho">A caminho</option>
              </select>
              <button className="confirm-btn" type="submit">
                Atualizar
              </button>
              <img
                className="paws"
                src="./img/paws.png"
                alt="Patinhas"
                width={80}
              />
            </form>
          </div>

          <div className="line"></div>

          <div className="delete form-col">
            <h2>Remover animal</h2>
            <form className="form update-animal">
              <input type="text" placeholder="ID" />
              <button className="confirm-btn" type="submit">
                Remover
              </button>
              <img src="./img/esquilo.png" alt="Esquilo" width={180} />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
