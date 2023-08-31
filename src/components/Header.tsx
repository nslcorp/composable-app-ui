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
  SfIconMenu, SfIconAddShoppingCart,
} from "@storefront-ui/react";
import Link from "next/link";

export default function TopNav() {
  const [inputValue, setInputValue] = useState("");

  const actionItems = [
    {
      icon: <SfIconShoppingCart />,
      label: "",
      ariaLabel: "Cart",
      role: "button",
    },
    {
      icon: <SfIconFavorite />,
      label: "",
      ariaLabel: "Wishlist",
      role: "button",
    },
    {
      label: "Log in",
      icon: <SfIconPerson />,
      ariaLabel: "Log in",
      role: "login",
    },
  ];

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Successfully found 10 results for ${inputValue}`);
  };

  return (
    <header className="flex justify-center w-full h-10">
      <div className="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full">
        <div>
          <Link href="/">Home</Link>

        </div>
        <div>
          <SfButton>
            <SfIconAddShoppingCart />
          </SfButton>
        </div>

      </div>
    </header>
  );
}
