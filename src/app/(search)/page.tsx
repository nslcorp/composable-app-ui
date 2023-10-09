import React, { use } from "react";
import ProductsList from "@/app/(search)/ProductsList/ProductsList";
import Filters from "@/app/(search)/Filters/page";
import { fetchCategories } from "@/api/fetchCategories";
import {fetchProducts} from "@/api/fetchProducts";

const SearchPage = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts(23);

  // const cart = useAppSelector(state => state)
  // console.log('SearchPage: cart', cart)

  return (
    <>
      <div className="flex">
        <div className="w-1/3">
          <Filters categories={categories} />
        </div>
        <div className="w-full">
          <ProductsList data={products} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
