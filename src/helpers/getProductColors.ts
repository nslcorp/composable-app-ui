import { Product } from "@/types";

export const getProductColors = (product: Product) => {
  const data = new Set(
    product.variants
      .map((variant) => {
        return variant.attributes.map((attribute) => attribute.color);
      })
      .flat()
  );

  return Array.from(data);
};
