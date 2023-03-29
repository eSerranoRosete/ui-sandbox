import React from "react";
import { Button } from "../ui/Button";
import { forwardRef } from "react";

interface IFProps {
  onCancel: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CreateCardForm = forwardRef<HTMLFormElement, IFProps>(
  ({ onSubmit, onCancel }: IFProps, ref) => {
    return (
      <form onSubmit={onSubmit} ref={ref}>
        <fieldset className="mt-5 flex gap-3">
          <input
            required
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="w-full rounded-md border border-muted text-sm focus:border-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
          <input
            required
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="w-full rounded-md border border-muted text-sm focus:border-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        </fieldset>
        <input
          required
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="mt-3 w-full rounded-md border border-muted text-sm focus:border-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
        <input
          required
          type="text"
          name="org"
          id="org"
          placeholder="Organization"
          className="mt-3 w-full rounded-md border border-muted text-sm focus:border-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
        <div className="mt-10 flex justify-end gap-2">
          <Button type="submit">Create Card</Button>
          <Button type="button" onClick={onCancel} variant="secondary">
            Cancel
          </Button>
        </div>
      </form>
    );
  }
);
