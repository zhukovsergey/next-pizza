"use client";
import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { useIntersection } from "react-use";
import { ProductCart } from "./product-cart";

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items
          .filter((item) => item.items.length > 0)
          .map((item, i) => (
            <ProductCart
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.image}
              price={item.items[0].price}
            />
          ))}
      </div>
    </div>
  );
};
