import { getCakes } from "@/lib/data";
import React from "react";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import { DeleteButton, EditButton } from "./buttons";
import { formatPrice } from "@/lib/utils";

const CakeTable = async () => {
  const cakes = await getCakes();

  return (
    <table className="w-full text-left text-sm text-slate-500">
      <thead className="bg-slate-200 text-sm uppercase text-slate-700">
        <tr className="divide-x divide-slate-50 border border-slate-200">
          <th className="w-20 min-w-20 max-w-20 px-6 py-3 text-center">#</th>
          <th className="w-full min-w-96 max-w-full px-6 py-3">Name</th>
          <th className="w-48 min-w-48 max-w-48 px-6 py-3 text-center">
            Category
          </th>
          <th className="w-32 min-w-32 max-w-32 px-6 py-3 text-center">
            Price
          </th>
          <th className="w-32 min-w-32 max-w-32 px-6 py-3 text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {cakes.map((cake, index) => (
          <tr
            key={cake.id}
            className="divide-x border-x border-b border-slate-200 divide-slate-200 even:bg-slate-50"
          >
            <td className="w-20 min-w-20 max-w-20 px-6 py-3 text-center">
              {index + 1}
            </td>
            <td className="w-full min-w-96 max-w-full px-6 py-3">
              {cake.name}
            </td>
            <td className="w-48 min-w-48 max-w-48 px-6 py-3 text-center">
              {cake.category}
            </td>
            <td className="w-32 min-w-32 max-w-32 px-6 py-3 text-center">
              {formatPrice(cake.price)}
            </td>
            <td className="w-32 min-w-32 max-w-32 space-x-1.5 px-6 py-3 text-center">
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CakeTable;
