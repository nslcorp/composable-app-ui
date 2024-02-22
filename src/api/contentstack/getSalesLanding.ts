import { contentstackClient } from "@/api/contentstack/contentstackClient";
import { ProductResponse, SalePage } from "@/api/contentstack/types";

export const getSalesLanding = async (type?: string) => {
  const Query = contentstackClient.ContentType("sale_page").Query();

  const response = await Query.toJSON()
    .find()
    .then((response) => response[0] as SalePage[]);

  //TODO: need to filter by different Sales:  Jacket | Hoodies | Accessories ...
  const firstSalePage = response[0]

  return firstSalePage;
};
