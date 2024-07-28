import { cn } from "@/lib/utils";

export const FilterModal = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <article
      className={cn("absolute left-4 sm:left-8 lg:left-16 bg-white top-20 rounded-lg border p-4 z-10", {
        hidden: !isOpen,
      })}
    ></article>
  );
};
