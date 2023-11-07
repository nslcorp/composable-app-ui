import "dotenv/config";
import { ProductResponse } from "@/api/contentstack/types";
import { Stack } from "contentstack";
import * as Contentstack from "contentstack";

const apiKey = process.env.CONTENTSTACK_API_KEY;
const deliveryToken = process.env.CONTENTSTACK_DELIVERY_TOKEN;
const envName = process.env.CONTENTSTACK_ENV_NAME;

console.log(apiKey, deliveryToken, envName)

// if (!apiKey || !deliveryToken || !envName) {
//   throw Error("Missing env variables for Contentstack");
// }

class ContentStackApi {
  Stack: Stack;

  constructor() {
    this.Stack = Contentstack.Stack({
      api_key: apiKey!,
      delivery_token: deliveryToken!,
      environment: envName!,
      region: "eu" as Contentstack.Region,
      fetchOptions: { debug: true },
    });

    console.log('ContentStackApi: instance Created')
  }

  getProduct = async (slug: string) => {
    const productsResponse = await this.Stack.ContentType("product")
      .Query()
      .where("url", '*')
      .toJSON()
      .find()
      .then((response) => response[0] as ProductResponse[]);

    const productMatchedBySlug = productsResponse.find(
      (p) => p.url === `product/${slug}`
    );
    const defaultProduct = productsResponse.filter(
      (p) => p.url === "/product/*"
    )[0];

    const product = productMatchedBySlug
      ? productMatchedBySlug
      : defaultProduct;

    return product
  };
}

export const contentstack = new ContentStackApi();
