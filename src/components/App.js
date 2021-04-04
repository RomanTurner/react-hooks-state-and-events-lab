import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isOn, setIsOn] = useState(true);
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function handleMode() {
    let mode = isOn;
    setIsOn(!mode);
  }

  return (
    <div className={"App " + (!isOn ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>
          {isOn ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
