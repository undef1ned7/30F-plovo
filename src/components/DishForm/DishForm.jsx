import React, { useState } from "react";

const DishForm = ({ onSubmit }) => {
  const [dish, setDish] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setDish((prev) => ({ ...prev, [name]: value }));
  };
  // console.log(dish);

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...dish,
      price: parseFloat(dish.price),
    });
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <h2>Add new dish</h2>
      <p className="form__label">name:</p>
      <input type="text" name="name" onChange={onChange} />
      <p className="form__label">description:</p>
      <textarea name="description" onChange={onChange}></textarea>
      <p className="form__label">image:</p>
      <input type="text" name="image" onChange={onChange} />
      <p className="form__label">price:</p>
      <input type="text" name="price" onChange={onChange} />
      <button>create</button>
    </form>
  );
};

export default DishForm;
