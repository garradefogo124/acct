import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import "../components/styles.css"
import data from "../components/prod_data"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <h1 className="home-title">
        Encontre todos os equipamentos <br /> e acessórios de vôlei bem aqui
      </h1>
      <div className="products">
        {data.map(({ id, image, title, price }) => (
          <div className="card" key={id}>
            <img src={image} alt={title} width={200} />
            <h3>{title}</h3>
            <h4>R$ {price}</h4>
            <div className="add">
              <input type="number" name="qtd" min="1" />
              <button>
                <StaticImage
                  src="../images/shopping-cart.png"
                  alt="Adicionar ao carrinho"
                  width={28}
                />
                <p>Adicionar</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
