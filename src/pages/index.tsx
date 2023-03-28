import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "~/components/buttons/Button";
import { StatCard } from "~/components/card/StatCard";
import { PageHeader } from "~/components/layout/PageHeader";
import { PageLayout } from "~/components/layout/PageLayout";
import { Tabs } from "~/components/tabs/Tabs";

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

interface IFProps {
  children: React.ReactNode;
}
const HomePage = ({ children }: IFProps) => {
  return (
    <PageLayout>
      <PageHeader
        title={
          <>
            UI Masterclass
            <span className="ml-3 text-sm text-stone-500">1,620</span>
          </>
        }
        actions={
          <>
            <Button variant="secondary" icon={<CloudArrowDownIcon />}>
              Download report
            </Button>
            <Button variant="primary">Add customer</Button>
          </>
        }
      />
      <div className="my-10 grid grid-cols-3 gap-10">
        <StatCard
          title="Total members"
          value="1,620"
          statLabel="20%"
          statLabelIcon="up"
        />
        <StatCard
          title="Enrolled members"
          value="1,210"
          statLabel="15%"
          statLabelIcon="up"
        />
        <StatCard
          title="Active now"
          value="208"
          statLabel="12%"
          statLabelIcon="up"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold">Course Members</h3>
        <p className="mb-10 text-muted">
          Manage total course members and their progress.
        </p>
        <Tabs tabs={tabs} />
      </div>
    </PageLayout>
  );
};

export default HomePage;
