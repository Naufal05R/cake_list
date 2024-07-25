import React from "react";

const CakeTable = () => {
  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-sm uppercase text-gray-700">
        <tr>
          <th className="w-14 min-w-14 max-w-14 px-6 py-3">#</th>
          <th className="w-full min-w-96 max-w-full px-6 py-3">Name</th>
          <th className="w-52 min-w-52 max-w-52 px-6 py-3">Category</th>
          <th className="w-28 min-w-28 max-w-28 px-6 py-3 text-center">
            Price
          </th>
          <th className="w-32 min-w-32 max-w-32 px-6 py-3 text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b bg-white">
          <td className="w-14 min-w-14 max-w-14 px-6 py-3"></td>
          <td className="w-full min-w-96 max-w-full px-6 py-3"></td>
          <td className="w-52 min-w-52 max-w-52 px-6 py-3"></td>
          <td className="w-32 min-w-32 max-w-32 px-6 py-3 text-center"></td>
          <td className="flex w-32 min-w-32 max-w-32 items-center justify-center gap-x-1.5 px-6 py-3"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default CakeTable;
