import { BASE_ULR, request } from "@/api/request";

export const createCart = async (): Promise<{ cartId: string }> => {
  try {
    const data: any = await request(`${BASE_ULR}/cart`, {
      method: "POST",
    });
    return data;
  }
  catch (error: any) {
    console.error('Error.createCart:', error.message);
    throw error
  }

};
