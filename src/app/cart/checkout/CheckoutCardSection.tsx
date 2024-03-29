'use client'
import AdyenCheckout from "@adyen/adyen-web";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();
  const payment = useSelector(state => state.payment);

  const navigate = useNavigate();

  const paymentContainer = useRef(null);

  // const { type } = useParams();

  useEffect(() => {
    dispatch(initiateCheckout(type));
  }, [dispatch, type])


  useEffect(() => {
    const { error } = payment;

    if (error) {
      navigate(`/status/error?reason=${error}`, { replace: true });
    }
  }, [payment, navigate])


  useEffect(() => {
    const { config, session } = payment;
    let ignore = false;

    if (!session || !paymentContainer.current) {
      // initiateCheckout is not finished yet.
      return;
    }

    const createCheckout = async () => {
      const checkout = await AdyenCheckout({
        ...config,
        session,
        onPaymentCompleted: (response, _component) =>
          navigate(getRedirectUrl(response.resultCode), { replace: true }),
        onError: (error, _component) => {
          console.error(error);
          navigate(`/status/error?reason=${error.message}`, { replace: true });
        },
      });

      // The 'ignore' flag is used to avoid double re-rendering caused by React 18 StrictMode
      // More about it here: https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data
      if (paymentContainer.current && !ignore) {
        checkout.create('card').mount(paymentContainer.current);
      }
    }

    createCheckout();

    return () => {
      ignore = true;
    }
  }, [payment, type, navigate])

  return (
    <div className="payment-container">
      <div ref={paymentContainer} className="payment"></div>
    </div>
  );
}