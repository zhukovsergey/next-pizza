import { Container, Filters, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { ProductCart } from "@/components/shared/product-cart";
import { ProductGroupList } from "@/components/shared/product-group-list";
import { SortPopup } from "@/components/shared/sort-popup";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтры*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Списки товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Пицца",
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 1000, count: 1 }],
                  },
                  {
                    id: 2,
                    name: "Пицца",
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 1000, count: 1 }],
                  },
                  {
                    id: 3,
                    name: "Пицца",
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 1000, count: 1 }],
                  },
                ]}
              />
              <ProductGroupList
                title="Завтраки"
                categoryId={2}
                items={[
                  {
                    id: 4,
                    name: "Завтрак1",
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif",
                    items: [{ price: 1000, count: 1 }],
                  },
                  {
                    id: 5,
                    name: "Завтрак1",
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif",
                    items: [{ price: 1000, count: 1 }],
                  },
                  {
                    id: 6,
                    name: "Завтрак1",
                    image:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif",
                    items: [{ price: 1000, count: 1 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
