// // src/pages/ProductDetail.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom'; // Para capturar parámetros de la URL
// import './ProductDetail.css'; // Los estilos específicos de ProductDetail

// const ProductDetail = () => {
//   const { productName } = useParams(); // Obtenemos el nombre del producto desde la URL

//   // Simula una función que busca el producto en base al nombre
//   const product = {
//     name: productName,  // En una aplicación real, buscarías el producto desde un API o base de datos
//     description: 'Descripción del producto',
//     price: 100,
//     image: 'ruta/a/imagen.jpg',
//   };

//   return (
//     <div className="product-detail-card">
//       <img src={product.image} alt={product.name} className="product-image" />
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p>{product.description}</p>
//         <p>${product.price}</p>
//         <button className="btn btn-primary">Agregar al carrito</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import React from 'react';
import { useParams } from 'react-router-dom'; // Para capturar el parámetro de la URL
import products from '../data/product'; // Importación por defecto de los productos
import './ProductDetail.css'; // Estilos específicos de ProductDetail

const ProductDetail = () => {
  const { productId } = useParams(); // Obtenemos el ID del producto desde la URL

  // Buscar el producto en la lista de productos
  const product = products.find(product => product.id === productId);

  // Si no se encuentra el producto, mostramos un mensaje
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail-card">
      <img src={product.img} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <p>${product.price}</p>
        <button className="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductDetail;

