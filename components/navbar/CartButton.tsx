'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { fetchCartItems } from "@/utils/actions";

export default function CartButton() {
  const [numItemsInCart, setNumItemsInCart] = useState(0);

  useEffect(() => {
    const getCartItems = async () => {
      const items = await fetchCartItems();
      setNumItemsInCart(items);
    };

    getCartItems();
  }, []);

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