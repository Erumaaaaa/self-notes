import { useState } from "react";
import Header from "./header";
import Form from "./form";
import GroceryList from "./grocery";
import Footer from "./footer";

const groceryItems = []

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.
      checked} : item));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
    <Header/>
    <Form onAddItem={handleAddItem} />
   <GroceryList items={items} 
   onDeleteItem={handleDeleteItem} 
   onToggleItem={handleToggleItem}
   onClearItems={handleClearItems}/>
   <Footer items={items}/>
  </div>
  );
}