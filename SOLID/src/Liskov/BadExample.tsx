import { TProduct } from "./type";

// LSP states that a derived class (or component)
// should be replaceable for its base class without breaking the program

// GridProductList completely
// changes the structure from <ul><li></li></ul> to <div><div></div></div>

// If other parts of the code expect an unordered list (ul/li),
// replacing ProductList with GridProductList will break the layout and styling

// This isn't an extension of ProductList, but a completely different component

export const ProductList = ({ products }: { products: TProduct[] }) => {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
};

// Completely changes structure

export const GridProductList = ({ products }: { products: TProduct[] }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {products.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};
