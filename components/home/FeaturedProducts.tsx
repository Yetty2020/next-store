import { fetchFeaturedProducts } from '@/utils/actions';
import EmptyList from '../global/EmptyList';

import ProductsGrid from '../products/ProductsGrid';
async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className='pt-2 px-14'>
      <h1 className="text-[10rem] font-bold text-center ">Featured Products</h1>
      <ProductsGrid products={products} />
    </section>
  );
}
export default FeaturedProducts;
// import { fetchFeaturedProducts } from "@/utils/actions";
// import EmptyList from "../global/EmptyList";
// import FeaturedProductsAnimation from "./FeaturedProductsAnimation";

// export default async function FeaturedProducts() {
//   const products = await fetchFeaturedProducts();
//   if (products.length === 0) return <EmptyList />;

//   return <FeaturedProductsAnimation products={products} />;
// }
