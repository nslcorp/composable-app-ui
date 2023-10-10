import React from "react";
import Filters from "@/app/search/Filters/page";
import { fetchCategories } from "@/api/fetchCategories";
import ProductDetails from "@/app/product/[slug]/ProductDetails/ProductDetails";
import { fetchProductDetails } from "@/api/fetchProductDetails";

interface ProductDetailsProps {
  params: {
    slug: string;
  },
  searchParams: {
    category: string;
  };
}

const ProductDetailsPage = async (props: ProductDetailsProps) => {

  const slug = props.params.slug;
  const productDetails = await fetchProductDetails(slug);
  const categories = await fetchCategories();

  return (
    <div>
      <div className="flex">
        <div className="w-1/3">
          <Filters categories={categories} />
        </div>
        <div className="w-full">
          {productDetails ? (
            <ProductDetails data={productDetails} />
          ) : (
            `No product details for product slug: ${slug}`
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
