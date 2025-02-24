import React from "react";
import DishItem from "./DishItem";

const Dishes = ({ dishes, addToCart }) => {
  return (
    <div>
      <h2>Dishes</h2>
      {dishes.map((dish) => {
        return (
        <DishItem key={dish.id} dish={dish} onClick={() => addToCart(dish)} />
      );
      })}
    </div>
  );
};

export default Dishes;
