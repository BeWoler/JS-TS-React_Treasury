import { useState } from "react";

// This rendering logic is hardcoded inside the component.
// If we want to change how items are displayed (e.g., add a "Remove" button),
// we must modify this component, breaking the Open-Closed Principle.

export const ShoppingCart = () => {
  const [items, setItems] = useState<{ id: number; name: string }[]>([]);

  const addItem = (item: { id: number; name: string }) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => addItem({ id: Date.now(), name: "New Item" })}>
        Add Item
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
