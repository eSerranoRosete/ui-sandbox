import type { HTMLAttributes } from "react";
import classNames from "classnames";

interface IFProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "xs" | "sm" | "md" | "lg";
  icon?: React.ReactNode;
}
export const Button = ({
  children,
  variant = "primary",
  size = "sm",
  icon,
  ...props
}: IFProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2",
        variant === "primary" &&
          "border-transparent bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
        variant === "secondary" &&
          "border-stone-300 bg-transparent text-stone-700 hover:bg-stone-100 focus-visible:ring-stone-300",
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg"
      )}
    >
      {icon && <span className="w-5">{icon}</span>}
      {children}
    </button>
  );
};
