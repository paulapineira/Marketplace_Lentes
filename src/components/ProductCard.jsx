// import React from 'react';
// import { Link } from 'react-router-dom';  // Para agregar la opción de "Ver más" en la tarjeta
// import './ProductCard.css';  // Estilos específicos de las tarjetas de producto

// const ProductCard = ({ name, description, price, image, onAddToCart, showRemoveButton, onRemove, quantity }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={name} className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title">{name}</h5>
//         <p className="card-text">{description}</p>
//         <p className="card-text">${price}</p>
//         {/* Mostramos la cantidad en la tarjeta si se pasa la prop */}
//         {quantity && <p className="card-text">Cantidad: {quantity}</p>}
//         <div className="d-flex justify-content-between">
//           <button className="btn btn-primary" onClick={onAddToCart}>Agregar al carrito</button>
//           <Link to={`/product/${name}`} className="btn btn-secondary">Ver más</Link>
//           {/* Si showRemoveButton es true, mostramos el botón de eliminar */}
//           {showRemoveButton && onRemove && (
//             <button className="btn btn-danger" onClick={onRemove}>
//               Eliminar
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from 'react';
import { Link } from 'react-router-dom';  // Para agregar el enlace "Ver más"
import './ProductCard.css';  // Estilos específicos de las tarjetas de producto

const ProductCard = ({ id, name, desc, price, img, onAddToCart, showRemoveButton, onRemove, quantity }) => {
  return (
    <div className="card">
      {/* Imagen del producto */}
      <img src={img} alt={name} className="card-img-top" />

      <div className="card-body">
        {/* Nombre del producto */}
        <h5 className="card-title">{name}</h5>

        {/* Descripción del producto */}
        <p className="card-text">{desc}</p>

        {/* Precio del producto */}
        <p className="card-text">${price}</p>

        {/* Mostrar la cantidad solo si es un producto en el carrito */}
        {quantity && <p className="card-text">Cantidad: {quantity}</p>}

        <div className="d-flex justify-content-between">
          {/* Botón para agregar al carrito */}
          <button className="btn btn-primary" onClick={onAddToCart}>Agregar al carrito</button>

          {/* Enlace para ver más detalles del producto */}
          <Link to={`/product/${id}`} className="btn btn-secondary">
            Ver más
          </Link>

          {/* Botón para eliminar del carrito si es necesario */}
          {showRemoveButton && onRemove && (
            <button className="btn btn-danger" onClick={onRemove}>
              Eliminar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

