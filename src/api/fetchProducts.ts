import { Product } from "@/types";
import { request } from "@/api/request";

export const fetchProducts = async (categoryId: number): Promise<Product[]> => {
  const products: Product[] = await request(
    `http://localhost:3000/products/${categoryId}`
  );
  return products;
};
