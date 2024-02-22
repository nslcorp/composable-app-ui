import { Product } from "@/types";
import { BASE_ULR, request } from "@/api/request";

export const fetchProducts = async (categoryId: number | string): Promise<Product[]> => {
  console.log(categoryId)
  const products: Product[] = await request(
    `${BASE_ULR}/products/${categoryId}`
  );
  return products;
};
