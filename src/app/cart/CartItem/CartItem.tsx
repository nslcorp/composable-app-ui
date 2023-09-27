import React from "react";

interface CartItemProps {}
const CartItem = (props: CartItemProps) => (
  <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
    <div className="flex flex-col min-w-[325px] max-w-[375px] lg:w-[496px] relative border border-neutral-200 rounded-md hover:shadow-xl">
      <div className="">
        <img
          src="https://magento.test/media/catalog/product/w/j/wj03-blue_main_1.jpg"
          alt="Great product"
          className="object-cover h-auto rounded-md aspect-square"
          width="100"
          height="100"
        />
      </div>
      {/* Item Configuration */}
      <div>

      </div>

      {/* Item Count and Price */}
      <div>

      </div>
    </div>
  </div>
);

export default CartItem;
