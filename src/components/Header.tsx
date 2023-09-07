"use client";
import React, { useState } from "react";
import {
  SfButton,
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconExpandMore,
  SfInput,
  SfIconSearch,
  SfIconMenu,
  SfIconAddShoppingCart,
} from "@storefront-ui/react";
import Link from "next/link";

export default function TopNav() {


  return (
    <header className="h-15 flex justify-center items-center bg-gray-100">
        <div>
          <Link href="/">
            <SfButton type="button" variant="secondary">MyAwesomeShop</SfButton>
          </Link>
        </div>
        <div className="ml-auto">
          <Link href="/cart">
            <SfButton variant="secondary" square slotPrefix={<SfIconShoppingCart />}>Cart</SfButton>
          </Link>
        </div>
    </header>
  );
}
