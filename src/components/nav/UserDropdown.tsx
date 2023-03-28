import { Menu, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import classNames from "classnames";

import { Button } from "../buttons/Button";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Dialog } from "../dialog/Dialog";
import { useAppActions } from "~/context/context";

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuth();
  const actions = useAppActions();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
          ES
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  onClick={() => actions.setCurrentPage("account")}
                  href={"/account"}
                  className={classNames(
                    "group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm",
                    active ? "bg-primary text-white" : "text-gray-900"
                  )}
                >
                  <Cog8ToothIcon className="w-4" />
                  Account Settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setIsOpen(true)}
                  className={classNames(
                    "group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm",
                    active ? "bg-primary text-white" : "text-gray-900"
                  )}
                >
                  <ArrowRightOnRectangleIcon className="w-4" />
                  Sign Out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Are you sure you want to sign out?"
        desc="Signing out will end your current session."
        maxWidth="xl"
      >
        <div className="mt-4">
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      </Dialog>
    </Menu>
  );
};
