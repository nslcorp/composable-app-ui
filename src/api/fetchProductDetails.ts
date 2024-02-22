import { fetchProducts } from "@/api/fetchProducts";

export const fetchProductDetails = async (slug: string) => {
  // const categoryId = 23; //magento
  const categoryId = "6ebf3374-2627-4825-985e-908a7e634af8"; //commerce tools

  const products = await fetchProducts(categoryId);
  const productDetails = products.find((product) => product.slug === slug);

  return productDetails;
};
