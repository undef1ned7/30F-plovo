import React from "react";
import DishItem from "./DishItem";
import axios from "axios";
import { getProducts } from "../../utils/request";

const Dishes = ({ dishes, addToCart, setAddDish }) => {
  const deleteProduct = (uuid) => {
    axios.delete(`http://localhost:7000/products/${uuid}`)
    .then(() => getProducts(setAddDish))
    .catch(e => console.error(e));
  }
  return (
    <div>
      <h2>Dishes</h2>
      {dishes.map((dish) => {
        return (
        <DishItem key={dish.id}   dish={dish} onClick={() => addToCart(dish)} deleteFunc={() => deleteProduct(dish.id)} />
      );
      })}
    </div>
  );
};

export default Dishes;
