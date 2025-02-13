import React, { useState } from "react";

const DishForm = ({ onSubmit }) => {
  const [dish, setDish] = useState({
    name: "",
    description: "",
    image: "https//sda",
    price: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setDish((prev) => ({ ...prev, [name]: value }));
  };
  console.log(dish);

  return (
    <div>
      <input type="text" name="image" onChange={onChange} />
      <input type="text" name="name" onChange={onChange} />
      {/* <App /> */}
    </div>
  );
};

export default DishForm;
