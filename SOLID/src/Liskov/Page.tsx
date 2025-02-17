import { TProduct, TProductListProps } from "./type";

// We keep the original component (ProductList) unchanged, 
// making it flexible with Render Props

// Instead of completely changing the structure in a derived component, 
// we delegate rendering to the parent component

// Any derived component (DefaultProductList, GridProductList, SliderProductList) 
// can be used interchangeably without breaking the application

// The core behavior of rendering a list of products remains the same, 
// we just allow different ways to display it (ul, div, slider)

export const ProductList = ({
  products,
  renderItem,
  wrapper,
}: TProductListProps) => {
  return wrapper(products.map(renderItem));
};

// Derived components follow LSP

export const DefaultProductList = ({ products }: { products: TProduct[] }) => {
  return (
    <ProductList
      products={products}
      wrapper={(children) => <ul>{children}</ul>}
      renderItem={(p) => <li key={p.id}>{p.name}</li>}
    />
  );
};

export const GridProductList = ({ products }: { products: TProduct[] }) => {
  return (
    <ProductList
      products={products}
      wrapper={(children) => (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {children}
        </div>
      )}
      renderItem={(p) => <div key={p.id}>{p.name}</div>}
    />
  );
};

export const SliderProductList = ({ products }: { products: TProduct[] }) => {
  return (
    <ProductList
      products={products}
      wrapper={(children) => <div className='slider'>{children}</div>}
      renderItem={(p) => (
        <div key={p.id} className='slide'>
          {p.name}
        </div>
      )}
    />
  );
};
