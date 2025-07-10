import ProductsContainer from "@/components/products/ProductsContainer";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  const { layout = "grid", search = "" } = await searchParams;
  return (
    <div>
      <ProductsContainer layout={layout} search={search} />
    </div>
  );
}

export default ProductsPage;
