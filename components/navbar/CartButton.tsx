import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuShoppingCart } from "react-icons/lu";

export default function CartButton() {
  const numItemsInCart = 9;
  return (
    <div>
      <Button
        size="icon"
        variant="outline"
        className="flex justify-center items-center relative"
        asChild
      >
        <Link href="/cart">
          <LuShoppingCart className="w-6 h-6" />
          <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
            {numItemsInCart}
          </span>
        </Link>
      </Button>
    </div>
  );
}
