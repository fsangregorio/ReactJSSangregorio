import React, { useState, useEffect } from 'react';

export default function Items() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let promiseItems = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: 101, title: 'Picada para 2', description: 'Picada para 2 personas', price: 1000, pictureUrl: 'https://i.ibb.co/1rbk1nt/picada2.jpg'},
          { id: 102, title: 'Picada para 4', description: 'Picada para 4 personas', price: 2000, pictureUrl: 'https://i.ibb.co/Z6tQ0Xf/picada4.jpg'},
          { id: 103, title: 'Picada para 6', description: 'Picada para 6 personas', price: 3000, pictureUrl: 'https://i.ibb.co/0mVy1Zd/picada6.jpg'},
          { id: 104, title: 'Cerveza', description: 'Cerveza artesanal calidad premium', price: 300, pictureUrl: 'https://i.ibb.co/BGtHFPs/cerveza.jpg'},
        ]);
      }, 2000);
    });

    promiseItems
      .then((res) => {
        setItems(res);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div style={{padding: '20px', textAlign: 'center', fontSize: '20px'}}>
          <br/>
          <p>Numero de Item: {item.id}</p>
          <p>Producto: {item.title}</p>
          <p>Descripción: {item.description}</p>
          <p>Precio: ${item.price}</p>
          <img src={item.pictureUrl} alt="Logo" width="20%"/>

          <br/>
        </div>
      ))}
    </div>
  );
}