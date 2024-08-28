"use client";

import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useClickAway, useDebounce } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);
  const ref = React.useRef(null);

  useClickAway(ref, () => setFocused(false));

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery]
  );
  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };
  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-100 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          placeholder="Поиск..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {products.length > 0 && (
          <div
            className={cn(
              "absolute bg-white w-full rounded-xl py-2 top-14 shadow-md transition-all duration-300 invidible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((item) => (
              <Link
                onClick={onClickItem}
                href={`/product/${item.id}`}
                className="px-3 py-2 hover:bg-primary/10 cursor-pointer flex items-center gap-3"
                key={item.id}
              >
                <img
                  src={item.imageUrl}
                  className="w-8 h-8 rounded-sm "
                  alt={item.name}
                />
                <span className="">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
