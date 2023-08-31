"use client";
import { SfLink } from "@storefront-ui/react";

const bottomLinks = [
  {
    label: "Terms",
    link: "#",
  },
  {
    label: "Privacy policy",
    link: "#",
  },
];
export default function Footer() {
  return (
    <footer className="pt-10 bg-neutral-100">
      <div className="bg-neutral-900 justify-end px-4 py-10 md:flex md:py-6 max-w-[1536px] mx-auto">
        <div className="flex items-center justify-center gap-6 py-2 my-4 md:ml-auto md:my-0">
          {bottomLinks.map(({ label, link }) => (
            <SfLink
              key={label}
              variant="secondary"
              className="text-white no-underline typography-text-sm active:text-white active:underline hover:text-white hover:underline"
              href={link}
            >
              {label}
            </SfLink>
          ))}
        </div>
        <p className="flex items-center justify-center py-2 leading-5 text-center typography-text-sm text-white/50 font-body md:ml-6">
          @2023 Vue Storefront
        </p>
      </div>
    </footer>
  );
}
