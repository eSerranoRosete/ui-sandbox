import React from "react";
import { Navigation } from "../nav/Navigation";

interface IFProps {
  children: React.ReactNode;
}
export const PageLayout = ({ children }: IFProps) => {
  return (
    <div>
      <Navigation />
      <main className="container m-auto h-full w-full p-4">{children}</main>
    </div>
  );
};
