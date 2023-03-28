"use client";

import { NavButton } from "./NavButton";

import { useAppState, useAppActions } from "~/context/context";
import { UserDropdown } from "./UserDropdown";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Customers", href: "/" },
  { label: "Projects", href: "/" },
  { label: "Tasks", href: "/" },
  { label: "Reporting", href: "/" },
  { label: "Settings", href: "/settings" },
];

export const Navigation = () => {
  const state = useAppState();

  const actions = useAppActions();

  const { currentPage } = state.app;

  return (
    <div className="container m-auto p-4">
      <nav className="flex items-center gap-20">
        <div className="font-semibold">Untitled UI</div>
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
