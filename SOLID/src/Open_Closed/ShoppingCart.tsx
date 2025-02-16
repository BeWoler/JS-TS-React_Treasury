import { ReactNode, useState } from "react";
import { TCartItem } from "./type";

// The rendering logic is now flexible.
// Instead of hardcoding item rendering, we allow customization via props.
// This makes the component open for extension but closed for modification.

export const ShoppingCart = ({
  renderItem,
}: {
  renderItem: (item: TCartItem) => ReactNode;
}) => {
  const [items, setItems] = useState<TCartItem[]>([]);

  const addItem = () => {
    setItems((prev) => [...prev, { id: Date.now(), name: "New Item" }]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>{items.map((item) => renderItem(item))}</ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};
