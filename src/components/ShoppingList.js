import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const defaultItems = items;
  const [itemArray, setItemArray] = useState(defaultItems)

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function onItemFormSubmit(event) {
    setItemArray([...itemArray, event])
  }

  const itemsToDisplay = itemArray
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
  .filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchInput} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
