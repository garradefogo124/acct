import React, { useEffect, useState } from "react";

import './App.css';
import Wishlist from './components/Wishlist';
import Produtos from './components/Produtos';
import ProdutosList from "./components/ProdutosList";

function App() {
    const wishlocalstorage = JSON.parse(localStorage.getItem("wish_produto") || "[]")

    const { produtos } = Produtos;
    const [wish, setwishlist] = useState(wishlocalstorage);

    const [abrirwish, setabrirwish] = useState(false);
    const [abrirprod, setabrirprod] = useState(true);

    // Localstorage dos produtos
    useEffect(() => {

        localStorage.setItem('wish_produto', JSON.stringify(wish));

    }, [wish]);

    // Colocar o produto na wishlist
    const addwish = (produto) => {
        const existe = wish.find(x => x.id === produto.id)

        if (existe) {

            alert("Esse produto já está na sua lista de desejos!")

        } else {

            setwishlist([...wish, { ...produto, qtde: 1 }]);

        }
    }

    // Tirar produto da wishlist
    const removwish = (wishprodut) => {

        setwishlist(wish.filter((x) => x.id !== wishprodut.id));

    }

    return (
        <div className="container">

            <p id="title" style={{ margin: "0 0 0 0" }}>Shuts Brinquedos</p>
            <button id="wishlist" onClick={() => { setabrirwish(true); setabrirprod(false) }}> Lista de desejos ({wish.length})</button>

            {abrirprod && <ProdutosList
                produtos={produtos}
                addwish={addwish} />}

            {abrirwish && <Wishlist
                wish={wish}
                removwish={removwish}
                setabrirwish={setabrirwish}
                setabrirprod={setabrirprod} />}


        </div>

    );
}

export default App;