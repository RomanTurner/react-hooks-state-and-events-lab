import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleClick() {
    let updateCart = isInCart;
    setIsInCart(!updateCart);
  }

  return (
    <li className={ isInCart? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
