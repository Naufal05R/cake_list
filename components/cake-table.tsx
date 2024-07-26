import { getCakes } from "@/lib/data";
import React from "react";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import { EditButton } from "./button";

const CakeTable = async () => {
  const cakes = await getCakes();

  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-sm uppercase text-gray-700">
        <tr>
          <th className="w-14 min-w-14 max-w-14 px-6 py-3">#</th>
          <th className="w-full min-w-96 max-w-full px-6 py-3">Name</th>
          <th className="w-52 min-w-52 max-w-52 px-6 py-3 text-center">
            Category
          </th>
          <th className="w-28 min-w-28 max-w-28 px-6 py-3 text-center">
            Price
          </th>
          <th className="w-32 min-w-32 max-w-32 px-6 py-3 text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {cakes.map((cake, index) => (
          <tr key={cake.id} className="border-b bg-white">
            <td className="w-14 min-w-14 max-w-14 px-6 py-3">{index + 1}</td>
            <td className="w-full min-w-96 max-w-full px-6 py-3">
              {cake.name}
            </td>
            <td className="w-52 min-w-52 max-w-52 px-6 py-3 text-center">
              {cake.category}
            </td>
            <td className="w-32 min-w-32 max-w-32 px-6 py-3 text-center">
              {cake.price}
            </td>
            <td className="flex w-32 min-w-32 max-w-32 items-center justify-center gap-x-1.5 px-6 py-3">
              <EditButton />

              <button className="cursor-pointer rounded-sm border p-1 hover:bg-gray-100">
                <IoTrashOutline size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CakeTable;
