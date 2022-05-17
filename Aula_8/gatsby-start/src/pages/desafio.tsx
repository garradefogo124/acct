// If you don't want to use TypeScript you can delete this file!
import React, { useState } from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/desafio.css"

type FormElement = React.SyntheticEvent

interface Info {
  docs: [
    {
      key: string
      title: string
      first_publish_year?: number
      number_of_pages_median?: number
      author_name?: [string]
      subject?: [string]
      time?: [string]
    }
  ]
}

const Desafio7: React.FC<React.HTMLProps<Element>> = function () {
  const [results, setResults] = useState<Info>({
    docs: [
      {
        key: "",
        title: "Indefinido",
        first_publish_year: undefined,
        number_of_pages_median: undefined,
        author_name: ["Indefinido"],
        subject: ["Indefinido"],
        time: ["Indefinido"],
      },
    ],
  })

  let link: string = "https://openlibrary.org/"

  const handleSearch = async (e: FormElement) => {
    try {
      e.preventDefault()

      const target = e.target as HTMLFormElement
      const name = target.search.value.replace(" ", "+")

      console.log("Nome do Livro: ", name)

      const response = await fetch(
        "https://openlibrary.org/search.json?q=" + name
      )
      const data = await response.json()

      setResults(data)

      link = document.getElementById("url").innerHTML
      console.log("O Link é: " + link)

      console.log("response", data)
    } catch (error) {
      console.log("error>>", error)
    }
  }

  return (
    <div className="container">
      <Layout>
        <Seo title="Desafio-07" />
        <div className="center">
          <h1>📚 Livraria</h1>
          <h2>Busque livros e obtenha informações sobre eles</h2>
          <form onSubmit={e => handleSearch(e)}>
            <input
              type="text"
              name="search"
              className="search"
              placeholder="Busque aqui..."
            />
            <button type="submit">🔎</button>
          </form>
        </div>
        {results ? (
          <div className="info">
            <h2>Título: {results.docs[0].title}</h2>
            <p>Autor: {results.docs[0].author_name}</p>
            <p>Ano de publicação: {results.docs[0].first_publish_year}</p>
            <p>Número de páginas: {results.docs[0].number_of_pages_median}</p>
            {/* <p>Temas: {results.docs[0].subject[0]},</p> */}
            <p>
              Onde se passa a história: <br /> {results.docs[0].time}
            </p>
            <p className="center">
              <a href={link} target="_blank" id="url">
                https://openlibrary.org{results.docs[0].key}
              </a>
            </p>
          </div>
        ) : (
          <h3>Nenhum resultado encontrado</h3>
        )}
      </Layout>
    </div>
  )
}

export default Desafio7

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
