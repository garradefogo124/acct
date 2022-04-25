import React from 'react';

const WishList = ({ onDelete, ProdName }) => {
  return (
        <tr>
            <th>{ProdName}</th>
            <th>
                <button onClick={onDelete} className="remove">Remover</button>
            </th>
        </tr>
  );
};

export default WishList;