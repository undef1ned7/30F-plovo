import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart__item">
        <p>Plov</p>
        <div>
          <p className="cart__item-count">3x</p>
          <p className="cart__item-price">1200 KGS</p>
        </div>
      </div>
      <div className="cart__total">
        <p>total: </p>
        <p>
          <strong>1200</strong> KGS
        </p>
      </div>
    </div>
  );
};

export default Cart;
