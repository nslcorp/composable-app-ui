import ProductListRecord from "@/app/search/ProductsList/ProductListRecord";
import { Product } from "@/types";
import { fetchProducts } from "@/api/fetchProducts";

interface ProductListProps {
  selectedCategoryId: number;
}
export default async function ProductsList(props: ProductListProps) {
  if (props.selectedCategoryId === 0) {
    return <h1 className="text-bold">Selected category is no correct</h1>;
  }

  const products = await fetchProducts(props.selectedCategoryId);
  if (products.length === 0) {
    return <h1>There is no products matching your criteria</h1>;
  }

  return (
    <div className="flex flex-col pl-0">
      {products.map((product: Product) => {
        return <ProductListRecord key={product.id} item={product} />;
      })}
    </div>
  );
}
