'use client'
import React from "react";
import SectionLayout from "@/components/SectionLayout/SectionLayout";
import {SfButton, SfLink} from "@storefront-ui/react";

interface SummaryProps {}
const Summary = (props: SummaryProps) => (
  <SectionLayout>
    <div className="">

      <div className="flex">
        <div className="md:text-2xl font-bold ">Order Summary</div>
        <div className="ml-auto md:text-2xl font-bold ">(Items: 1234)</div>
      </div>


      <div className="flex mt-4">
        <div className="text-lg text-neutral-400">Subtotal</div>
        <div className="ml-auto text-lg text-neutral-600">1234</div>
      </div>
      <div className="flex mt-1">
        <div className=" text-neutral-400">Shipping</div>
        <div className="ml-auto text-neutral-700">1234</div>
      </div>
      <div className="border-y my-4"></div>
      <div className="flex w-full">
        <div className="md:text-xl">Total</div>
        <div className="ml-auto md:text-xl">12345</div>
      </div>


      <SfButton size="lg" className="w-full my-4">
        Place Order And Pay
      </SfButton>
      <div className="typography-text-sm mt-4 text-center">
        By placing my order, you agree to our <SfLink href="#">Terms and Conditions</SfLink> and our{' '}
        <SfLink href="#">Privacy Policy.</SfLink>
      </div>
    </div>



  </SectionLayout>
);

export default Summary;
