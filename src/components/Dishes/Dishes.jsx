import React from "react";
import DishItem from "./DishItem";

const Dishes = ({ dishes }) => {
  return (
    <div>
      <h2>Dishes</h2>
      {dishes.map((dish) => {
        return (
        <DishItem key={dish.id} dish={dish} />
      );
      })}
    </div>
  );
};

export default Dishes;
