import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSelect(e) {
    setSelectedCategory(e.target.value);
  }

  function displayList() {
    if (selectedCategory === "All") {
      return items;
    } else {
      let filteredSelect = items.filter((i) => i.category === selectedCategory);
      return filteredSelect;
    }
  }

  return (
    <div className='ShoppingList'>
      <div className='Filter'>
        <select onChange={handleSelect} name='filter'>
          <option value='All'>Filter by category</option>
          <option value='Produce'>Produce</option>
          <option value='Dairy'>Dairy</option>
          <option value='Dessert'>Dessert</option>
        </select>
      </div>
      <ul className='Items'>
        {displayList().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
