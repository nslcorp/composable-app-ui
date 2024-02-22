"use client";
import AdyenCheckout from "@adyen/adyen-web";
import React, { useEffect, useRef } from "react"
import '@adyen/adyen-web/dist/adyen.css';


// const session =
//   "Ab02b4c0!BQABAgCPcp3JMnWR42zNMYmIYPqJ2/faJ9yELM0mUtE/FLQ0/e5Ik8uQRLWMqwb/wgC3pg64h98bGpGH7HIRdoYc0tt4EBh+Hs8IAHDbdPE/jclyZa5EfbSQSzRKdJuVFDL7RSwndXF55yAZVLZWQZLwSINR/mHCnGK7VuV0pbzYqkRXZSagJX6f5uvBAzbe7T+3GU8zkb6/T2BmCkP5SiIk5DNc4N1F3HyrDmXl7coLJoHXpJb37/0eBvkmjycIvWefKwmxTmRxATc2qFr/zpEyGxQU/Uniq079Al4o/hhAiPdmUHJRISJnBNEFsIZ6467KTfNBwfnKVs0nAA5RX1e5SQuSf1asdoZgjHtBvrW1is7pzUO/KMehhSVP36TqiGC8WXI526ihyDm4RLlMPmm+V9fV8U6RAnM9ZvmjrPrV0imw1z+lttkVJ6We0jjc2IidSeYPdXKeOID8kffF13CLJpyq9fMEMIdQr8K8cBLpls/wGahx2JKI4QwRg42WWdzBOsvlI1O9j2FuvZGJin9MJr8rT0rvyzX8WtVkCd4PsccqkeBSJN0fBR1IG76cLDjdUyZS0C7z0+YnAgUvkz/W2kBO5blwh0fDrLQaHEYBJ2oNeEskd1p8zfcuC/YtX56ne7yMq6sVkhZR6NPLCmaVeYz7Ol9UpkndeSXz2XQOi+0BJgwFRuAnp7NmS7c/kHgASnsia2V5IjoiQUYwQUFBMTAzQ0E1MzdFQUVEODdDMjRERDUzOTA5QjgwQTc4QTkyM0UzODIzRDY4REFDQzk0QjlGRjgzMDVEQyJ91t92R3cU/RFnOCUaPu08/CNuLr+fVeX/t/NTlrUvXZ2uEeCILPirBlCTjwyu5hd6o7JGpkVvdQJRm+MCT1E6RoO2ryfkAxmYTQCntrIUwenV/JEDWRe1vRzUxKnLTwOt9suPCyTt5Pl+KhU0kx4yp+/J7QkhJAVWXEaFd+S+UYzGUw3EynqdY3rZOOHUm+21wqT/ZSxyBevEsCSgXJbK9HdlBs+YPXkEjrSnGt3/lH+CVQau/EI3V9X0ZkfpWKdf96oN7skVRqn70kKi5aCiAZSnWL8DqU+0pn5/3fTJHIbY2cycJPLOrwyj0bDs1s3MuvOqMJtuT0oHmLvIlWcbnMPun6rE6nzH3Mbiifpi/P3LM3uzy4G3sCOq6UriPqaOYZgZTREOjjw0mm5lFtD+xerREoSnwtRr6PVmt8O3UEoIc9l6hsqhOdavFGyw4jv85X/BLK2ZnnWtHrg3P3yqiQvtjFzuusTckO1cZBWY8v8KMBly60TuaMZe79LRduVLqlhLQBNebVhrW4COqo+bzhicgRkga2/ezAvoHtCLx8QhsCIIWo2mKVdtXYvxld+EVzQSvXoil+nc1cYvqEc04ifZ7y9wSCgIiYHuLy7vhZPF7AWlqzXyWE5yybNmuSCt0aCaBTjZSTWlRuWzHP1G2zjqG1Fq";

interface CheckoutV2PProps {
  session: any;
}


const CheckoutV2 = (props: CheckoutV2PProps) => {
  const checkoutContainerRef = useRef(null);
  useEffect(() => {
    if (!props.session || !checkoutContainerRef.current) {
      console.log("ContainerRef is not mount yet.");
      return;
    }

      const createCheckout = async () => {
        const adyenCheckoutComponent = await AdyenCheckout({
          session: props.session,
          environment: "test",
          locale: "en_US",
          showPayButton: true,
          clientKey: "test_XLWIUFSLWJDJ7DEWS4YP54M6ZEL7B42Z",
          paymentMethodsConfiguration: {
            ideal: {
              showImage: true,
            },
            card: {
              hasHolderName: true,
              holderNameRequired: true,
              name: "Credit or debit card",
              amount: {
                value: 10000, // 100€ in minor units
                currency: "EUR",
              },
            },
          },
          onPaymentCompleted: (response, _component) => {
            console.log("Payment Complete. Navigate");
            console.log(response);
            // navigate(getRedirectUrl(response.resultCode), {replace: true});
          },
          onError: (error, _component) => {
            console.log("Payment Error", error);
            // console.error(error);
            // navigate(`/status/error?reason=${error.message}`, { replace: true });
          },
        });

        if (checkoutContainerRef.current) {
          adyenCheckoutComponent
            .create("card")
            .mount(checkoutContainerRef.current);
        }
      };
      createCheckout();

  });

  return (
    <div>
      <h1>Checkout V2</h1>
      <div ref={checkoutContainerRef} id="checkout-v2"></div>
    </div>
  );
};

export default CheckoutV2;
