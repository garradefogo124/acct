import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import "../components/styles.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <h1 className="home-title">
        Encontre todos os equipamentos <br /> e acessórios de vôlei bem aqui
      </h1>
      <div className="products">
        <div className="card">
          <StaticImage
            src="../images/prod1.png"
            alt="Adicionar ao carrinho"
            width={200}
          />
          <h3>Bola de Vôlei Penalty</h3>
          <h4>R$ 125,00</h4>
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
      </div>
    </div>
  </Layout>
)

export default IndexPage
