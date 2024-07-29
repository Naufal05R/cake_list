"use client";

import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { useState } from "react";
import { FilterModal } from "./modals";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { cn } from "@/lib/utils";

export const CreateButton = () => {
  return (
    <button className="inline-flex cursor-pointer items-center gap-x-1 rounded-sm bg-blue-700 py-[9px] pl-2.5 pr-4 text-sm text-white hover:bg-blue-800">
      <IoAddSharp size={20} />
      Create
    </button>
  );
};

export const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex cursor-pointer items-center rounded-sm border bg-blue-700 p-2 text-sm text-white hover:bg-blue-800"
      >
        <VscSettings size={20} />
      </button>
      <FilterModal isOpen={isOpen} />
    </>
  );
};

export const SortButton = () => {
  const [isTop, setIsTop] = useState(true);
  return (
    <>
      <button
        onClick={() => setIsTop(!isTop)}
        className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-sm border bg-blue-700 text-sm text-white hover:bg-blue-800"
      >
        <IoMdArrowDropup className={cn({ hidden: isTop })} size={32} />
        <IoMdArrowDropdown className={cn({ hidden: !isTop })} size={32} />
      </button>
    </>
  );
};

export const EditButton = () => {
  return (
    <button className="inline-flex cursor-pointer rounded-sm border p-1 hover:bg-gray-100">
      <IoPencil size={20} />
    </button>
  );
};

export const DeleteButton = () => {
  return (
    <button className="cursor-pointer rounded-sm border p-1 hover:bg-gray-100">
      <IoTrashOutline size={20} />
    </button>
  );
};
