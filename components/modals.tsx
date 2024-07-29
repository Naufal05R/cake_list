import { cn } from "@/lib/utils";
import { FaCheck, FaChessKing } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { MdCheck, MdOutlineCheck } from "react-icons/md";

export const FilterModal = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <article
      className={cn(
        "absolute left-3.5 top-20 z-10 rounded-lg border bg-white sm:left-7 lg:left-14",
        {
          hidden: !isOpen,
        },
      )}
    >
      <ul className="flex select-none flex-col divide-y">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="select-none">
            <label
              htmlFor={`${index}`}
              className="relative inline-flex min-w-96 cursor-pointer select-none items-center gap-x-2.5 p-2.5 pr-4"
            >
              <input
                id={`${index}`}
                type="checkbox"
                defaultChecked
                className="peer aspect-square h-8 w-8 cursor-pointer appearance-none rounded border-2 border-blue-600 checked:border-blue-600 checked:bg-blue-600"
              />
              <FaCheck
                className="pointer-events-none absolute left-3.5 top-5 z-50 -translate-y-1/4 fill-none stroke-transparent peer-checked:!fill-white"
                size={24}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <p className="w-full select-none text-left font-semibold text-blue-600">
                Filter {index + 1}
              </p>
            </label>
          </li>
        ))}
      </ul>
    </article>
  );
};
