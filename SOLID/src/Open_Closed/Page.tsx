import { ShoppingCart } from "./ShoppingCart";

// Now we can customize how items are displayed without modifying ShoppingCart.
// This follows the Open-Closed Principle.

export const Page = () => {
  return (
    <>
      <ShoppingCart
        renderItem={(item) => (
          <li key={item.id}>
            {item.name} - <button>Remove</button>
          </li>
        )}
      />
      <ShoppingCart
        renderItem={(item) => (
          <li key={item.id}>
            {item.name} - <input placeholder="Update"/>
          </li>
        )}
      />
    </>
  );
};
