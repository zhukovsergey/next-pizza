"use client";

import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Завтраки" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Кофе" },
  { id: 5, name: "Напитки" },
  { id: 6, name: "Десерты" },
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({ name, id }, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center font-bold h-100 rounded-2xl px-5",
            categoryActiveId === id
              ? "bg-white shadow-md shadow-gray-200 text-primary"
              : ""
          )}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
