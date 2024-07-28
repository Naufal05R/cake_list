import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

export const CreateButton = () => {
  return (
    <button
      className="inline-flex cursor-pointer items-center gap-x-1 rounded-sm bg-blue-700 py-[9px] pl-2.5 pr-4 text-sm text-white hover:bg-blue-800"
    >
      <IoAddSharp size={20} />
      Create
    </button>
  );
};

export const FilterButton = () => {
  return (
    <button className="inline-flex cursor-pointer rounded-sm border p-1 hover:bg-gray-100">
      <VscSettings />
    </button>
  );
}

export const EditButton = () => {
  return (
    <button
      className="inline-flex cursor-pointer rounded-sm border p-1 hover:bg-gray-100"
    >
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
