import { db } from "@/db";

export const getCakes = async () => {
  const cakes = await db.cake.findMany();

  return cakes;
};

export const getAllCategories = async () => {
  const categories = await db.cake.findMany({
    select: {
      category: true,
    },
    distinct: ["category"],
  });

  const uniqueCategories = categories.map((cake) => cake.category);

  return uniqueCategories;
};
