import { CART_ID_KEY } from "@/app/Bootstrap";

export const getCartId = () => {
  if (!localStorage) {
    throw new Error("No localStorage");
  }
  const cartId = localStorage.getItem(CART_ID_KEY) || "";

  if (!cartId) {
    throw new Error("No cartId in localStorage");
  }

  return cartId.replaceAll('"', "");
};
