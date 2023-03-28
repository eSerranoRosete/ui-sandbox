import { Tab } from "@headlessui/react";
import classNames from "classnames";

interface IFProps {
  tabs: {
    title: string;
    content: React.ReactNode;
  }[];
}

export const Tabs = ({ tabs }: IFProps) => {
  return (
    <Tab.Group>
      <Tab.List className="flex w-fit divide-x divide-stone-300 overflow-hidden rounded-md border border-stone-300">
        {tabs.map((tab, i) => (
          <Tab
            key={i}
            className={({ selected }) =>
              classNames(
                "px-4 py-2 text-sm outline-none focus:outline-none",
                selected ? "bg-primary text-white" : "hover:bg-stone-100"
              )
            }
          >
            {tab.title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-2 w-full bg-red-600">
        {tabs.map((tab, i) => (
          <Tab.Panel key={i}>{tab.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
