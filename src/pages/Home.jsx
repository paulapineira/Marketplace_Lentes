// import React from 'react';
// import { useCart } from '../context/CartContext';
// import ProductCard from '../components/ProductCard';
// import Banner from '../components/Banner'; 
// import './Home.css'; 

// const Home = () => {
//   const { addToCart } = useCart();

//   const products = [
//     {
//       id: 1,
//       name: 'Producto 1',
//       description: 'Descripción del producto 1',
//       price: 100,
//       image: 'https://random.dog/7d76ab15-5cc1-4684-aa82-568617fed752.jpg'
//     },
//     {
//       id: 2,
//       name: 'Producto 2',
//       description: 'Descripción del producto 2',
//       price: 150,
//       image: 'https://random.dog/7d76ab15-5cc1-4684-aa82-568617fed752.jpg'
//     },
//     {
//       id: 3,
//       name: 'Producto 3',
//       description: 'Descripción del producto 3',
//       price: 200,
//       image: 'https://random.dog/7d76ab15-5cc1-4684-aa82-568617fed752.jpg'
//     }
//   ];

//   return (
//     <div className="home-container">
//       <Banner /> {/* Solo mostramos el banner en Home */}
      
//       <div className="container product-section">
//         <h1 className="text-center">Bienvenido al Marketplace</h1>
//         <p className="text-center">Explora nuestros productos y haz tus compras fácilmente.</p>
        
//         <div className="row">
//           {products.map((product) => (
//             <div key={product.id} className="col-12 col-md-4 mb-4">
//               <ProductCard
//                 id={product.id}        // Aquí pasamos el id
//                 name={product.name}
//                 description={product.description}
//                 price={product.price}
//                 image={product.image}
//                 onAddToCart={() => addToCart(product)} // Función para agregar al carrito
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner'; 
import './Home.css';

// Simula la importación de los productos desde un archivo
import productsData from '../data/product';  // Ruta donde guardas el archivo product.js

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="home-container">
      <Banner /> {/* Solo mostramos el banner en Home */}
      
      <div className="container product-section">
        <h1 className="text-center">Bienvenido al Marketplace</h1>
        <p className="text-center">Explora nuestros productos y haz tus compras fácilmente.</p>
        
        <div className="row">
          {productsData.map((product) => (
            <div key={product.id} className="col-12 col-md-4 mb-4">
              <ProductCard
                id={product.id}        // Aquí pasamos el id
                name={product.name}
                description={product.desc}  // Usamos la descripción del archivo
                price={product.price}
                image={product.img}     // Usamos la imagen del archivo
                onAddToCart={() => addToCart(product)} // Función para agregar al carrito
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
