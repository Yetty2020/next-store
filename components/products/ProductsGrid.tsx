import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className=" grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-auto">
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const actualImage = image?.startsWith("http") || image?.startsWith("https")
  ? image
  : image?.startsWith("/images/") 
    ? image 
    : `/images/${image || "default.jpg"}`;
        const dollarsAmount = formatCurrency(price);
        
        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card  className="border-0">
                <CardContent className="py-2 px-4 border-0">
                  <div className="relative h-64  ">
                    <Image
                       src={actualImage}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      priority
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg  capitalize">{name}</h2>
                    <p className="text-muted-foreground  mt-2">
                      {dollarsAmount}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-12 right-7 z-5 bg-white rounded-full border-0 ">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
