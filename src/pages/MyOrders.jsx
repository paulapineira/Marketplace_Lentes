import React from 'react';
import { useCart } from '../context/CartContext'; 
import ProductCard from '../components/ProductCard'; 
import './MyOrders.css'; 

const MyOrders = () => {
  const { cart, removeFromCart } = useCart(); // Obtenemos los productos en el carrito

  const handleCheckout = () => {
    alert('Proceso de compra iniciado');
  };

  return (
    <div className="container mt-5">
      <h2>Mis Pedidos</h2>
      {cart.length === 0 ? (
        <p>No tienes productos en tu pedido.</p>
      ) : (
        <>
          <div className="row">
            {/* Mostramos cada producto en el carrito con la cantidad */}
            {cart.map((order) => (
              <div key={order.id} className="col-12 col-md-4 mb-4">
                <ProductCard
                  name={order.name}
                  description={order.desc}
                  price={order.price}
                  image={order.img}
                  onAddToCart={() => {}} // Si necesitas agregarlo nuevamente al carrito
                  showRemoveButton={true} // Mostrar el botón de eliminar en MyOrders
                />
                {/* Mostramos la cantidad de productos */}
                <div className="d-flex justify-content-between mt-2">
                  <span>Cantidad: {order.quantity}</span>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(order.id)} // Eliminar producto del carrito
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* El botón "Proceder con la compra" solo aparecerá una vez, debajo de los productos */}
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-success" onClick={handleCheckout}>
              Proceder con la compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;
