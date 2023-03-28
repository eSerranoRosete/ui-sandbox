interface IFProps {
  title: React.ReactNode;
  actions?: React.ReactNode;
}
export const PageHeader = ({ title, actions }: IFProps) => {
  return (
    <header className="mt-8 flex items-center">
      <h1 className="grow text-4xl font-medium">{title}</h1>
      <div className="flex gap-3">{actions}</div>
    </header>
  );
};
