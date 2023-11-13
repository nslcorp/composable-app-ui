import { getProduct } from "@/api/contentstack/getProduct";
import React from "react";
import Filters from "@/app/search/Filters/page";
import { fetchCategories } from "@/api/fetchCategories";
import ProductDetails from "@/app/product/[slug]/ProductDetails/ProductDetails";
import { fetchProductDetails } from "@/api/fetchProductDetails";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
  searchParams: {
    category: string;
  };
}

const ProductDetailsPage = async (props: ProductDetailsProps) => {
  const slug = props.params.slug;
  const productDetails = await fetchProductDetails(slug);
  const categories = await fetchCategories();
  console.log(slug);

  // const productResponse = await contentstack.getProduct("hera-pullover-hoodie");

  const promoSection = await getProduct(slug);


  return (
    <div>
      <div className="flex">
        <div className="w-1/3">
          <Filters categories={categories} />
        </div>
        <div className="w-full">
          {productDetails ? (
            <ProductDetails data={productDetails} promo={promoSection} />
          ) : (
            `No product details for product slug: ${slug}`
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
