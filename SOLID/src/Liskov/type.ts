import { ReactNode } from "react";

export type TProduct = { id: number; name: string };

export type TProductListProps = {
  products: TProduct[];
  renderItem: (product: TProduct) => ReactNode;
  wrapper: (children: ReactNode) => ReactNode;
};
