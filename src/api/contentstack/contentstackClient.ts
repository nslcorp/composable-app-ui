import * as Contentstack from "contentstack";

const apiKey = process.env.CONTENTSTACK_API_KEY;
const deliveryToken = process.env.CONTENTSTACK_DELIVERY_TOKEN;
const envName = process.env.CONTENTSTACK_ENV_NAME;


if (!apiKey || !deliveryToken || !envName) {
  throw Error("Missing env variables for Contentstack");
}


export const contentstackClient = Contentstack.Stack({
  api_key: apiKey!,
  delivery_token: deliveryToken!,
  environment: envName!,
  region: "eu" as Contentstack.Region,
  fetchOptions: { debug: true },
});