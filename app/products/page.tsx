import ProductsContainer from '@/components/products/ProductsContainer';
interface PageProps {
   params: { id: string };
  searchParams?: { layout?: string; search?: string };
}

function ProductsPage({ params, searchParams }: PageProps) {
  void params;
  const layout = searchParams?.layout || 'grid';
  const search = searchParams?.search || '';

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}

export default ProductsPage;