import Link from "next/link";
import clsx from "clsx";

interface IFProps {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}
export const NavButton = ({ label, href, active, onClick }: IFProps) => {
  return (
    <Link
      className={clsx(
        "rounded-md px-4 py-2 text-sm font-medium transition-all duration-100 ",
        active ? "bg-accent" : "hover:bg-stone-100"
      )}
      onClick={onClick}
      href={href}
    >
      {label}
    </Link>
  );
};
