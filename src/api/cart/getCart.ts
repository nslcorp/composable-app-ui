import { BASE_ULR, request } from "@/api/request";
import { Cart } from "@/types";

export const getCart = async (cartId: string | undefined) => {
  // const cartId = await getUserCartId();

  const data: Cart = await request(`${BASE_ULR}/cart/${cartId}`);
  return data;
};
