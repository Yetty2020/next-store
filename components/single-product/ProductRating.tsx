import { FaStar } from "react-icons/fa";

type ProductRatingProps = {
  productId: string;
};

async function ProductRating({ productId }: ProductRatingProps) {
  const rating = 4.2;
  const count = 25;

  console.log(productId);

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <FaStar className='w-3 h-3' />
      {rating} {countValue}
    </span>
  );
}

export default ProductRating;
