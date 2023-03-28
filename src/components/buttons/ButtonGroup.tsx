import classNames from "classnames";
import Link from "next/link";

interface IFProps {
  size?: "xs" | "sm" | "md" | "lg";
  items: {
    label: string;
    onClick?: () => void;
    active?: boolean;
    href: string;
  }[];
}
export const ButtonGroup = ({ items, size = "sm" }: IFProps) => {
  return (
    <div className="inline-flex divide-x divide-stone-300 overflow-hidden rounded-md border border-stone-300">
      {items.map((item, index) => (
        <button
          onClick={item.onClick}
          key={index}
          className={classNames(
            "px-4 py-2 focus-visible:outline-primary",
            size === "xs" && "text-xs",
            size === "sm" && "text-sm",
            size === "md" && "text-base",
            size === "lg" && "text-lg",
            item.active
              ? "bg-primary text-white"
              : "text-black hover:bg-muted/10"
          )}
        >
          <Link href={item.href}>{item.label}</Link>
        </button>
      ))}
    </div>
  );
};
