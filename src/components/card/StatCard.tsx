import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
} from "@heroicons/react/24/outline";

interface IFProps {
  title: string;
  value: string;
  statLabel?: string;
  statLabelIcon?: "up" | "down";
}
export const StatCard = ({
  title,
  value,
  statLabel,
  statLabelIcon,
}: IFProps) => {
  return (
    <div className="group/card cursor-pointer rounded-lg border border-stone-300 px-6 py-8 transition-colors duration-150 hover:bg-primary hover:text-white">
      <h6 className="mb-2 text-sm font-medium text-stone-500 group-hover/card:text-stone-200">
        {title}
      </h6>
      <div className="flex items-baseline">
        <p className="flex grow text-4xl font-medium">{value}</p>
        {statLabel && (
          <span className="flex rounded-full border border-primary px-3 py-0.5 text-sm font-semibold group-hover/card:border-white">
            {statLabelIcon === "up" && (
              <ArrowSmallUpIcon className="mr-1 w-3" />
            )}
            {statLabelIcon === "down" && (
              <ArrowSmallDownIcon className="mr-1 w-3" />
            )}
            {statLabel}
          </span>
        )}
      </div>
    </div>
  );
};
