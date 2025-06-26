
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';


function LoadingContainer() {
  return (
    <div className=' items-center justify-center'>
      <LoadingProduct />
      
      
    </div>
  );
}

function LoadingProduct() {
  return (
    //  <Card className='border border-gray-300 mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
    //   <CardContent className='  p-4'>
    //     <div className='flex items-center space-x-4'>
    //     <Skeleton className='bg-gray-200 h-60 w-full' />
    //     <div className='space-y-2 '>
       
    //     <Skeleton className=' bg-red-400 h-4 w-3/4 mt-4' />
    //     <Skeleton className='bg-gray-200 h-4 w-1/4 mt-4' />
    //     </div>
    //     </div>
      
        
    //   </CardContent>
    // </Card>
    // <div className='flex items-center space-x-4'>
    //     <Skeleton className='bg-gray-200 h-60 w-full' />
    //      <div className='space-y-2 '>
       
    //     <Skeleton className=' bg-red-400 h-4 w-3/4 mt-4' />
    //     <Skeleton className='bg-gray-200 h-4 w-1/4 mt-4' />
    //      </div>
    //     </div>
    <Card className='border border-gray-300 mt-6 grid gap-y-8 p-6  lg:gap-x-16'>

     <div className="flex items-center space-x-4">
      <Skeleton className="h-60 w-1/2 bg-gray-200" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250] bg-gray-200" />
         <Skeleton className="h-4 w-[250] bg-gray-200" />
          <Skeleton className="h-4 w-[250] bg-gray-200" />
        <Skeleton className="h-4 w-1/4 bg-gray-200" />
      </div>
    </div>
    </Card>


  );
}
export default LoadingContainer;