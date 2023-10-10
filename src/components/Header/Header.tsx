"use client"
import { SfButton } from "@storefront-ui/react";
import Link from "next/link";
import CartButton from "@/components/Header/CartButton";

export default function Header() {
  return (
    <header className="h-15 flex justify-center items-center bg-gray-100">
      <div>
        <Link href="/" replace={true}>
          <SfButton type="button" variant="secondary">
            MyAwesomeShop
          </SfButton>
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

