"use client";
import React from "react";
import {
  SfButton,
  SfCounter,
  SfIconDelete,
  SfIconThumbUp,
  SfListItem,
} from "@storefront-ui/react";

const CartItem2 = () => (
  <SfListItem>
    <div className="flex cursor-auto">
      <div>
        <img
          src="https://magento.test/media/catalog/product/w/j/wj03-blue_main_1.jpg"
          alt="Great product"
          className="object-cover h-auto rounded-md aspect-square"
          width="100"
          height="100"
        />
      </div>
      {/* Item Configuration */}
      <div className="m-2 w-full">
        <div className="flex w-full">
          <div className="text-xl text-emerald-800 underline mb-4">
            Title of the product
          </div>
          <div className="ml-auto">Counter</div>
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
            <SfIconDelete size="sm" className="mr-2.5" />
            Remove
          </button>
          <div className="ml-auto">Price</div>
        </div>

      </div>


    </div>
  </SfListItem>
);

export default CartItem2;
