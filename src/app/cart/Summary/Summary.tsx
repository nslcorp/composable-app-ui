import SectionLayout from "@/components/SectionLayout/SectionLayout";
import { SfButton, SfLink } from "@storefront-ui/react";
import { useAppSelector } from "@/store/store";
import { selectCart } from "@/store/reducer/cartSlice";
import { CartLineItem } from "@/types";
import { putOrder } from "@/api/cart/putOrder";
import Link from "next/link";
import { useState } from "react";

interface SummaryProps {}
const Summary = (props: SummaryProps) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isPlacingOrderLoading, setIsPlacingOderLoading] = useState(false);
  const { data } = useAppSelector(selectCart);
  const count = data.lineItems.length;

  const subTotal = data.lineItems.reduce((acc: number, item: CartLineItem) => {
    return acc + item.totalPrice;
  }, 0);

  const handlePlaceOrder = async () => {
    // setIsPlacingOderLoading(true);
    // const order = await putOrder();
    // setIsPlacingOderLoading(false);
    // setIsOrderPlaced(true);
    // console.info(`Order ${order.id} has been placed.`)
    console.info(`Order has been placed.`);
    // alert(`Order ${order.id} has been placed.`);
  };

  return (
    <SectionLayout>
      <div className="">
        <div className="flex">
          <div className="md:text-2xl font-bold ">Order Summary</div>
          <div className="ml-auto md:text-2xl font-bold ">Items: {count}</div>
        </div>

        <div className="flex mt-4">
          <div className="text-lg text-neutral-400">Subtotal</div>
          <div className="ml-auto text-lg text-neutral-600">{subTotal}</div>
        </div>
        <div className="flex mt-1">
          <div className=" text-neutral-400">Shipping</div>
          <div className="ml-auto text-neutral-700">0</div>
        </div>
        <div className="border-y my-4 f"></div>
        <div className="fle w-full ">
          <div className="md:text-xl">Total</div>
          <div className="ml-auto md:text-xl">{subTotal}</div>
        </div>

        <SfButton
          size="lg"
          className="w-full my-4"
          onClick={handlePlaceOrder}
          disabled={isOrderPlaced || isPlacingOrderLoading}
        >
          <Link href="/cart/checkout">Place Order And Pay</Link>
        </SfButton>
        <div className="typography-text-sm mt-4 text-center">
          By placing my order, you agree to our{" "}
          <SfLink href="#">Terms and Conditions</SfLink> and our{" "}
          <SfLink href="#">Privacy Policy.</SfLink>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Summary;
