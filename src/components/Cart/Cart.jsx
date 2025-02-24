import React from "react";

const Cart = ({ cartDishes }) => {
  console.log(cartDishes);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartDishes.map((cart) => {
        return (
          <div className="cart__item">
            <p>{cart.dish.name}</p>
            <div>
              <p className="cart__item-count">{cart.amount}x</p>
              <p className="cart__item-price">
                {cart.dish.price * cart.amount} KGS
              </p>
            </div>
          </div>
        );
      })}
      <div className="cart__total">
        <p>total: </p>
        <p>
          <strong>
            {cartDishes.reduce((acc, res) => {
              return acc + res.amount * res.dish.price;
            }, 0)}
          </strong>
          KGS
        </p>
      </div>
      <button className="cart__btn">order</button>
    </div>
  );
};

export default Cart;
