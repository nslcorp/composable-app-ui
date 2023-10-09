import { createCart } from "@/api/cart/createCart";
import { useLocalStorage } from "react-use";

const CART_ID_KEY = "userCartId";
export const getUserCartId = async () => {
  // const [cartId, setCartId] = useLocalStorage(CART_ID_KEY, "");
  const cartId = localStorage.getItem(CART_ID_KEY)

  if (!cartId) {
    const cartResponse = await createCart();
    // setCartId(cartResponse.cartId);
    localStorage.setItem(CART_ID_KEY, cartResponse.cartId);
    return cartResponse.cartId
  }
  return cartId.replaceAll('"', "");
};
