"use client";
import ProductListRecord from "@/app/(search)/ProductsList/ProductListRecord";
import {Product} from "@/types";

interface ProductsListProps {
  data: Product[]
}
export default function ProductsList(props: ProductsListProps){
  return (
    <>
      <div className="flex flex-col pl-0">
        {props.data.map((product: Product) => {
          return <ProductListRecord key={product.id} item={product} />
        })}
      </div>
    </>

  );
}
