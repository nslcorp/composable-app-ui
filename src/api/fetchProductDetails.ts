import {fetchProducts} from "@/api/fetchProducts";

export const fetchProductDetails = async (slug: string) => {
    const products = await fetchProducts(23);
    const productDetails = products.find((product) => product.slug === slug);

    return productDetails;
}