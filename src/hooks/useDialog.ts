import React from "react";

export const useDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return { isOpen, openDialog, closeDialog };
};
