"use client";

import { NavButton } from "./NavButton";

import { useAppState, useAppActions } from "~/context/context";
import { UserDropdown } from "./UserDropdown";
import Link from "next/link";
import { CubeIcon } from "@heroicons/react/24/solid";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Users", href: "/home" },
];

export const Navigation = () => {
  const state = useAppState();

  const actions = useAppActions();

  const { currentPage } = state.app;

  return (
    <div className="container m-auto p-4">
      <nav className="flex items-center gap-20">
        <Link href="/home" className="flex items-center gap-2 font-semibold">
          <CubeIcon className="w-6" />
          <span>Inshare</span>
        </Link>
        <div className="flex grow items-center">
          {navItems.map((item, i) => (
            <NavButton
              active={currentPage === item.label}
              onClick={() => actions.setCurrentPage(item.label)}
              key={i}
              label={item.label}
              href={item.href}
            />
          ))}
        </div>
        <UserDropdown />
      </nav>
    </div>
  );
};
