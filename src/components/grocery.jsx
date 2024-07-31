import { useState } from "react";
import Item from "./item";

export default function GroceryList({items, onDeleteItem, onToggleItem, onClearItems}) {
    const [shortBy, setShortBy] = useState('input')
    
    let sortedItems;
   
    switch (shortBy) {
     case 'name':
       sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
       break;
    case 'checked':
       sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
       break;
     default:
       sortedItems = items;
       break;
    }
   
     return (
       <>
        <div className="list">
         <ul>
           {sortedItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
           ))}
         </ul>
       </div>
       <div className="actions">
         <select value={shortBy} onChange={(e) => setShortBy(e.target.value)}>
           <option value="input">Urutkan berdasarkan urutan input</option>
           <option value="name">Urutkan berdasarkan nama barang</option>
           <option value="checked">Urutkan berdasarkan ceklis</option>
         </select>
         <button onClick={onClearItems}>Bersihkan Daftar</button>
       </div>
       </>
     )
   }