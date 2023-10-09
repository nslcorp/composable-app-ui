"use client";
import React from "react";
import {

  SfIconDelete,

} from "@storefront-ui/react";
import SimpleQuantitySelector from "@/components/SimpleQuantitySelect/SimpleQuantitySelect";
import {CartLineItem} from "@/types";

interface CartItemProps {
  item: CartLineItem
}

const CartItem = (props: CartItemProps) => (
    <div className="flex cursor-auto border border-neutral-200 rounded-md hover:shadow-lg ">
      {/*<div className="flex">*/}
      {/*  <img*/}
      {/*    src="https://magento.test/media/catalog/product/w/j/wj03-blue_main_1.jpg"*/}
      {/*    alt="Great product"*/}
      {/*    className="object-cover h-auto rounded-md aspect-square"*/}
      {/*    width="100"*/}
      {/*    height="100"*/}
      {/*  />*/}
      {/*</div>*/}
      {/* Item Configuration */}
      <div className="m-2 w-full">
        <div className="flex w-full">
          <div className="text-xl text-emerald-800 underline mb-4">
            {props.item.variant.name}
          </div>
          <div className="ml-auto">
            <SimpleQuantitySelector quantity={props.item.quantity} sku={props.item.variant.sku} />
          </div>
        </div>

        <div className="flex">
          <div className="w-1/3 text-neutral-500">Size:</div>
          <div>123</div>
        </div>
        <div className="flex">
          <div className="w-1/3 text-neutral-500">Color:</div>
          <div>RED</div>
        </div>

        <div className="flex w-full mt-6">
          <button type="button" className="hover:text-neutral-800 text-neutral-500">
            <SfIconDelete size="xs" className="mr-2.5" />
            Remove
          </button>
          <div className="ml-auto">{props.item.totalPrice}</div>
        </div>

      </div>


    </div>
);

export default CartItem;
