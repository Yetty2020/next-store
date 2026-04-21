"use client";


import ProductsGrid from "../products/ProductsGrid";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProductsAnimation({ products }: { products: any[] }) {
  

  return (
    <section  className="pt-2 px-14 relative overflow-hidden">
      {/* Split Heading */}
      <div className="flex justify-center items-center text-[10rem] font-extrabold">
        <h1 className="flex gap-4">
          <span className="heading-left block">Featured</span>
          <span className="heading-right block">Products</span>
        </h1>
      </div>

      {/* Products Grid */}
      <div className="products-grid opacity-0 scale-0">
        <ProductsGrid products={products} />
      </div>
    </section>
  );
}
