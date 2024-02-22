export const createSession = async () => {
  return await fetch("https://checkout-test.adyen.com/v71/sessions", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "X-API-Key":
        "AQEwhmfxKYjJaRdAw0m/n3Q5qf3VbbtsILJJW2pDyGz5yTIYZd7EXnTbkA0OvKxP2rjvEMFdWw2+5HzctViMSCJMYAc=-tdjdUY9OA6gxzsZKzAuaJVQOyb+szvRdGjPD7f69o1g=-4&q(~7C5{Yu3?x9y",
    }),
    body: JSON.stringify({
      merchantAccount: "EPAMAccount274ECOM",
      amount: {
        value: 100,
        currency: "EUR",
      },
      returnUrl: "http://localhost:3000/checkout?shopperOrder=12xy..",
      reference: "be5b976d-ea5d-4801-9232-0f9a8fb50c0f",
      countryCode: "NL",
    }),
  }).then((response) => response.json())
    .then(data => (
      {
        ...data,
        // amount: data.amount,
        // countryCode: data.countryCode,
        // expiresAt: data.expiresAt,
        // sessionData: data.sessionData
        // id: 'CS5F795B9B8E852C72',
        // merchantAccount: 'EPAMAccount274ECOM',
        // reference: 'be5b976d-ea5d-4801-9232-0f9a8fb50c0f',
        // returnUrl: 'http://localhost:3000/checkout?shopperOrder=12xy..',
        // shopperLocale: 'en-US',
      }
    ));
};
