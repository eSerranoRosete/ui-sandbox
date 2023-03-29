"use client";

import { NavButton } from "./../ui/NavButton";

import { useAppActions } from "~/context/context";
import { UserDropdown } from "./UserDropdown";
import Link from "next/link";
import { CubeIcon } from "@heroicons/react/24/solid";

import { config } from "~/config/AppConfig";
import { useRouter } from "next/router";

export const Navigation = () => {
  const router = useRouter();
  const currentPage = router.pathname.split("/")[1];

  const actions = useAppActions();

  return (
    <div className="container m-auto p-4">
      <nav className="flex items-center justify-between lg:justify-start">
        <Link
          onClick={() => actions.setCurrentPage("Home")}
          href="/dashboard"
          className="flex items-center gap-2 font-semibold lg:mr-20"
        >
          <CubeIcon className="w-6" />
          <span>Inshare</span>
        </Link>
        <div className="flex items-center lg:grow">
          {config.navigation.map((item, i) => (
            <NavButton
              active={currentPage === item.alias}
              onClick={() => actions.setCurrentPage(item.alias)}
              key={i}
              label={item.name}
              href={item.path}
            />
          ))}
        </div>
        <div className="flex items-center gap-6">
          <UserDropdown />
        </div>
      </nav>
    </div>
  );
};
