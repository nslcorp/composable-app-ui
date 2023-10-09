"use client";
import React from "react";
import {SfButton, SfIconShoppingCart, SfSelect} from "@storefront-ui/react";
import { Product } from "@/types";
import { getProductSizes } from "@/helpers/getProductSizes";
import { mapToSelectOptions } from "@/helpers/mapToSelectOptions";
import SimpleSelect from "@/components/SimpleSelect/SimpleSelect";
import { getProductColors } from "@/helpers/getProductColors";
import {addProductToCart} from "@/api/cart/addProductToCart";
// import {addProductToCart} from "@/api/cart/addProductToCart";

interface ProductDetailsProps {
  data: Product;
}

const ProductDetails = (props: ProductDetailsProps) => {

  const imgUrl = props.data.variants[0].images[0].url;
  const price = props.data.variants[0].prices[0].value.centAmount;
  const sku = props.data.variants[0].sku;
  const sizes = getProductSizes(props.data);
  const colors = getProductColors(props.data);

  const [selectedColor, setSelectedColor] = React.useState(colors[0]);
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);


  const handleAddToCart = async () => {
    const product = {
      qty: 1,
      sku
    }

    await addProductToCart(product)
  }

  return (
    <div className="flex m-4">
      <div className="w-1/2">
        <img
          src={imgUrl}
          alt="Great product"
          className="object-cover h-auto rounded-md aspect-square"
          width="300"
          height="450"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-3xl text-emerald-800 underline mb-4">
          {props.data.name}
        </div>
        <div className="text-right mb-3">
          <span className="block pb-2 text-lg font-bold typography-text-lg">
            ${price}
          </span>
        </div>
        <div className="mb-2">
          <SimpleSelect
            selectLabel="Color"
            data={colors}
            selectedValue={selectedColor}
            onChange={setSelectedColor}
          />
        </div>
        <div>
          <SimpleSelect
            selectLabel="Size"
            data={sizes}
            selectedValue={selectedSize}
            onChange={setSelectedSize}
          />
        </div>

        <div className="mt-10 text-right">
          <SfButton
            className="ml-auto"
            type="button"
            size="sm"
            slotPrefix={<SfIconShoppingCart  />}
            onClick={handleAddToCart}
            disabled={isAddedToCart}
          >
            Add to cart
          </SfButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
