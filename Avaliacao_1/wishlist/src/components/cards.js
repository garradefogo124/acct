import React from 'react';

function Card({title, source, price, onSubmit}) {
    
    const Title = title;

    function NewProduct() {
        onSubmit(Title);
    }

    return (
        <div className="card flex">
            <h3>{title}</h3>
            <img className="product-img" src={source} alt={title} />
            <h4>R${price}</h4>
            <button className="add-list" onClick={NewProduct}>+ Lista de desejos</button>
        </div>
    );
    
}

export default Card;