import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { Button } from "../components/ui/button";

export const logo = (
  <>
    <Image
      alt="Documentation"
      src={"/logo/standalone-gradient.svg"}
      width={30}
      height={30}
      aria-label="Novu"
    />
  </>
);

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        {logo}
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          Novu Documentation
        </span>
      </>
    ),
    transparentMode: "top",
  },
  links: [
    {
      url: "/quickstart",
      type: "main",
      text: "Documentation",
    },
    {
      url: "/guides",
      type: "button",
      icon: "Book",
      text: "Guides",
    },
    {
      url: "/api-reference",
      type: "button",
      icon: "Book",
      text: "API Reference",
    },
    {
      type: "custom",
      children: (
        <div className="flex items-center gap-2 justify-end ml-auto">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <Button variant="outline" size="sm">
              Visit Dashboard
            </Button>
          </SignedIn>
        </div>
      ),
    },
  ],
};
