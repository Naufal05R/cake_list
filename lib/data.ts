import { db } from "@/db";

export const getCakes = async () => {
  const cakes = await db.cake.findMany();

  return cakes;
};
