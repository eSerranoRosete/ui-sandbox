import React from "react";
import { Dialog, IFProps as DialogProps } from "~/components/ui/Dialog";
import { Button, IFProps as ButtonProps } from "~/components/ui/Button";
import { useDialog } from "~/hooks/useDialog";

interface IFChildren {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

interface IFProps extends Omit<DialogProps, "isOpen" | "onClose" | "children"> {
  children: (props: IFChildren) => React.ReactNode;
  buttonProps: Omit<ButtonProps, "onClick">;
  buttonLabel: string;
}

export const ButtonModal = ({
  children,
  buttonLabel,
  buttonProps,
  ...props
}: IFProps) => {
  const { isOpen, openDialog, closeDialog } = useDialog();
  return (
    <>
      <Button {...buttonProps} onClick={openDialog}>
        {buttonLabel}
      </Button>
      <Dialog isOpen={isOpen} onClose={closeDialog} {...props}>
        {children({ isOpen, openDialog, closeDialog })}
      </Dialog>
    </>
  );
};
