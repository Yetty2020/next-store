import { Skeleton } from '../ui/skeleton';
import { Card, CardContent } from '../ui/card';

function LoadingContainer() {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
      
    </div>
  );
}

function LoadingProduct() {
  return (
    <Card className='border border-gray-300'>
      <CardContent className='p-4'>
        <Skeleton className='bg-gray-200 h-48 w-full' />
        <Skeleton className=' bg-gray-200 h-4 w-3/4 mt-4' />
        <Skeleton className='bg-gray-200 h-4 w-1/4 mt-4' />
        
      </CardContent>
    </Card>
  );
}
export default LoadingContainer;