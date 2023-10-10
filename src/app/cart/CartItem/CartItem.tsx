import React from "react";
import { SfIconDelete } from "@storefront-ui/react";
import { CartLineItem } from "@/types";
import { removeProductFormCart } from "@/api/cart/removeProductFormCart";
import { useAppDispatch } from "@/store/store";
import { fetchCart } from "@/store/reducer/cartSlice";
import { getCartId } from "@/api/cart/getCartId";
import ProductQuantity from "@/app/cart/CartItem/components/ProductQuantity";

interface CartItemProps {
  item: CartLineItem;
}

const CartItem = (props: CartItemProps) => {

  const [isRemoving, setIsRemoving] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleRemoveItem = async () => {
    setIsRemoving(true);
    try {
      await removeProductFormCart(props.item.id);
      const cartId = getCartId();
      dispatch(fetchCart(cartId));
    } catch (error: any) {
    } finally {
      setIsRemoving(false);
    }
  };

  const totalPrice = props.item.totalPrice;

  return (
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
            <ProductQuantity item={props.item} />
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
          <button
            type="button"
            className="hover:text-neutral-800 text-neutral-500"
            disabled={isRemoving}
            onClick={handleRemoveItem}
          >
            <SfIconDelete size="xs" className="mr-2.5" />
            {isRemoving ? "Removing..." : "Remove"}
          </button>
          <div className="flex flex-col ml-auto">
            <div className="text-xs text-neutral-400">Total Price:</div>
            <div className="text-lg">{props.item.totalPrice} $</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
