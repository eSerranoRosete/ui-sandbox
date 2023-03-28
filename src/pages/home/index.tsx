import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { Button } from "~/components/buttons/Button";
import { StatCard } from "~/components/card/StatCard";
import { Dialog } from "~/components/dialog/Dialog";
import { PageHeader } from "~/components/layout/PageHeader";
import { PageLayout } from "~/components/layout/PageLayout";
import { Tabs } from "~/components/tabs/Tabs";
import { useDialog } from "~/hooks/useDialog";

import { api } from "~/utils/api";

const tabs = [
  {
    title: "View All",
    content: "View All Tab Content",
  },
  {
    title: "Enrolled",
    content: "Enrolled Tab Content",
  },
  {
    title: "Active",
    content: "Active Tab Content",
  },
  {
    title: "Unenrolled",
    content: "Unenrolled Tab Content",
  },
];

const DashboardPage = () => {
  const { isOpen, openDialog, closeDialog } = useDialog();
  const formRef = useRef<HTMLFormElement>(null);

  const ctx = api.useContext();

  const { mutate } = api.card.create.useMutation({
    onSuccess: () => ctx.card.invalidate(),
  });
  const { data, isLoading } = api.card.getAll.useQuery();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = formRef.current?.querySelectorAll("input");

    let payload: any = {};

    fields?.forEach((field) => {
      payload[field.name] = field.value;
    });

    mutate(payload);
    closeDialog();
  };

  return (
    <>
      <PageLayout>
        <PageHeader
          title={"Active Cards"}
          actions={
            <Button
              onClick={openDialog}
              iconEnd={<PlusCircleIcon />}
              variant="primary"
            >
              Create Card
            </Button>
          }
        />
        <section className="my-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-10">
            {isLoading
              ? "Loading..."
              : data?.map((card) => (
                  <StatCard key={card.id} title={card.title} value={card.org} />
                ))}
          </div>
        </section>
        <div>
          <h3 className="text-lg font-bold">Course Members</h3>
          <p className="mb-10 text-muted">
            Manage total course members and their progress.
          </p>
          <Tabs tabs={tabs} />
        </div>
      </PageLayout>
      <Dialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Create New Card"
        desc="Fill the details to create a new card."
        maxWidth="xl"
      >
        <form onSubmit={onSubmit} ref={formRef}>
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
            <Button type="button" onClick={closeDialog} variant="secondary">
              Cancel
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default DashboardPage;
