import { fetchProducts } from "@/api/fetchProducts";

export const fetchProductDetails = async (slug: string) => {
  // const categoryId = 23; //magento
  const categoryId = "c6adbb5b-ca90-4dc0-95d5-88eff689d1b0"; //commerce tools

  const products = await fetchProducts(categoryId);
  const productDetails = products.find((product) => product.slug === slug);

  return productDetails;
};
