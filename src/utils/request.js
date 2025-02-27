import axios from "axios";

export const getProducts = (setState) => {
  axios.get("http://localhost:7000/products")
  .then(({data}) => {setState(data)})
  .catch((e) => console.error(e));
}