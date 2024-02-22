"use client"
import { SfButton, SfIconArrowBack, SfIconMenu, SfIconStar } from "@storefront-ui/react";
import Link from "next/link";
import CartButton from "@/components/Header/CartButton";
import React from "react";

export default function Header() {
  return (
    <header className="h-15 flex justify-center items-center bg-gray-100">
      <div>
        <Link href="/" replace={true}>
          <SfButton size="lg" type="button" variant="secondary">
            MyAwesomeShop
          </SfButton>
        </Link>
      </div>

      <div className="ml-20">
        <Link href="/search" replace={true}>
          <SfButton size="sm" variant="secondary" slotPrefix={<SfIconMenu />}>Categories</SfButton>
        </Link>
      </div>
      <div className="ml-auto">
        <Link href="/cart">
          <CartButton />
        </Link>
      </div>
    </header>
  );
}

