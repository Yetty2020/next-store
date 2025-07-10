import { Link } from "lucide-react"
import { Button } from "../ui/button"

type AddToCartProps = {
    productId: string;
};

function AddToCart( { productId }: AddToCartProps) {

  console.log(productId);
  
  return (
    <div>
        <Button >
            <Link href="/Cart">Add to Cart</Link>
            </Button>
        
      
    </div>
  )
}

export default AddToCart
