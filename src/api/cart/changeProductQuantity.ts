import { getCartId } from "@/api/cart/getCartId";
import { BASE_ULR, request } from "@/api/request";

export const changeProductQuantity = async (itemId: string, qty: number) => {
  try {
    const cartId = getCartId();

    const data: any = await request(
      `${BASE_ULR}/cart/${cartId}/items/${itemId}`,
      {
        method: "PUT",
        body: { qty },
      }
    );
    return data;
  } catch (error: any) {
    console.error("Error.addProductToCart:", error.message);
  }
};
