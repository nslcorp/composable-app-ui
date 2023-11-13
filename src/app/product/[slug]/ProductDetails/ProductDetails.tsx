"use client";
import { addProductToCart } from "@/api/cart/addProductToCart";
import { getCartId } from "@/api/cart/getCartId";
import { PromoSection } from "@/api/contentstack/types";
import PromoList from "@/app/product/[slug]/ProductDetails/components/PromoList/PromoList";
import SimpleSelect from "@/components/SimpleSelect/SimpleSelect";
import { getProductColors } from "@/helpers/getProductColors";
import { getProductSizes } from "@/helpers/getProductSizes";
import { fetchCart } from "@/store/reducer/cartSlice";
import { useAppDispatch } from "@/store/store";
import { Product } from "@/types";
import { SfButton, SfIconShoppingCart } from "@storefront-ui/react";
import React from "react";

interface ProductDetailsProps {
  data: Product;
  promo: PromoSection[];
}

const ProductDetails = (props: ProductDetailsProps) => {
  const imgUrl = props.data.variants[0].images[0].url;
  const price = props.data.variants[0].prices[0].value.centAmount;
  const sku = props.data.variants[0].sku;
  const sizes = getProductSizes(props.data);
  const colors = getProductColors(props.data);

  const [selectedColor, setSelectedColor] = React.useState(colors[0]);
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = async () => {
    const product = {
      qty: "1",
      sku,
    };
    setIsAddingToCart(true);
    await addProductToCart(product);
    const cartId = getCartId();
    dispatch(fetchCart(cartId));
    setIsAddingToCart(false);
  };

  return (
    <div className="flex flex-col">
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
              slotPrefix={<SfIconShoppingCart />}
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              {isAddingToCart ? "Adding..." : "Add to cart"}
            </SfButton>
          </div>
        </div>
      </div>

      <PromoList data={props.promo} />

    </div>
  );
};

export default ProductDetails;
