import { useState } from "react";
import ListSate from "./ListSate";
export default function Products() {
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: "Phone Case", price: "$699" },
    { id: 2, name: "Apple Phone", price: "$1200" },
    { id: 3, name: "Ipad", price: "$199" },
  ]);
  const [price, setPrice] = useState("");
  const [inputValue, setInputValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputValue || !price) return;
    setProducts((prev) => [
      ...prev,
      {
        id: Math.random() * products.length,
        name: inputValue,
        price: `$${price}`,
      },
    ]);
    setPrice("");
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>Products</h1>
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? <span>light</span> : <span>dark</span>}
      </button>
      <button
        onClick={() => {
          setProducts((prev) => [
            ...prev,
            {
              id: products.length + 1,
              name: inputValue,
              price: (products.length + 1) * 100,
            },
          ]);
          setInputValue("");
        }}
      >
        add new product
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        name="item"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        name="price"
      />
      {products.map(({ id, name, price }) => (
        <ul key={id}>
          <li>{name}</li>
          <li>{price}</li>
        </ul>
      ))}
      <button type="submit">Submit product</button>
      <ListSate toggle={toggle} />
    </form>
  );
}
