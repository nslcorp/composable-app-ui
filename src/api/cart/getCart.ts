import { request } from "@/api/request";
import { Cart } from "@/types";

export const getCart = async (cartId: string | undefined) => {
  // const cartId = await getUserCartId();

  const data: Cart = await request(`http://localhost:3000/cart/${cartId}`);
  return data;
};
