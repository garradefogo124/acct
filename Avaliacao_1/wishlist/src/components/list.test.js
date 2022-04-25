import React, {useState} from 'react';

const initialList = [
    {
      id: '1',
      name: 'Bola de Vôlei',
      price: 120.00,
    },
  ];

const List = () => {
    const [list, setList] = useState(initialList);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
  
    function handleChange(event) {
      setName(event.target.value);
    }
  
    function handleAdd() {
      const newList = list.concat({ name });
  
      setList(newList);
    }
  
    return (
      <div>
        <div>
          <input type="text" value={name} onChange={handleChange} />
          <button type="button" onClick={handleAdd}>
            Add
          </button>
        </div>
  
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default List;