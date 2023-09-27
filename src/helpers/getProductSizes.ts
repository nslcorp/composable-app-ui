import { Product } from "@/types";

export const getProductSizes = (product: Product) => {
  const sizes = new Set(
    product.variants
      .map((variant) => {
        return variant.attributes.map((attribute) => attribute.size);
      })
      .flat()
  );

  return Array.from(sizes);
};
