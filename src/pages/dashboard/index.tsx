import { PlusCircle } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "~/components/ui/Button";
import { StatCard } from "~/components/card/StatCard";
import { Dialog } from "~/components/ui/Dialog";
import { PageHeader } from "~/components/layout/PageHeader";
import { PageLayout } from "~/components/layout/PageLayout";
import { Tabs } from "~/components/ui/Tabs";
import { useDialog } from "~/hooks/useDialog";

import { api } from "~/utils/api";
import { ButtonModal } from "~/components/ui/ButtonModal";
import { CreateCardForm } from "~/components/forms/CreateCardForm";

const tabs = [
  {
    title: "View All",
    content: "",
  },
  {
    title: "Enrolled",
    content: "",
  },
  {
    title: "Active",
    content: "",
  },
  {
    title: "Unenrolled",
    content: "",
  },
];

const DashboardPage = () => {
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
  };

  return (
    <>
      <PageLayout>
        <PageHeader
          title={
            <>
              Trending Cards
              <span className="ml-3 text-sm text-muted">
                {data?.length} / 3 cards in use
              </span>
            </>
          }
          actions={
            <div className="flex gap-3">
              <Button variant="secondary">View All</Button>
              <ButtonModal
                maxWidth="md"
                title="Create New Card"
                desc="Fill the details to create a new card."
                buttonLabel="Create Card"
                buttonProps={{
                  variant: "primary",
                  iconEnd: <PlusCircle />,
                }}
              >
                {({ closeDialog }) => (
                  <CreateCardForm
                    onCancel={closeDialog}
                    ref={formRef}
                    onSubmit={onSubmit}
                  />
                )}
              </ButtonModal>
            </div>
          }
        />
        <section className="mt-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-10">
            {isLoading
              ? "Loading..."
              : data?.map((card) => (
                  <StatCard
                    key={card.id}
                    title={card.title}
                    value={card.org}
                    statLabel="20%"
                    statLabelIcon="up"
                  />
                ))}
          </div>
        </section>
        <hr className="my-10" />
        <div>
          <h3 className="text-lg font-bold">Recent interactions</h3>
          <p className="mb-10 text-muted">
            Interactions recieved through your cards
          </p>
          <Tabs tabs={tabs} />
        </div>
      </PageLayout>
    </>
  );
};

export default DashboardPage;
