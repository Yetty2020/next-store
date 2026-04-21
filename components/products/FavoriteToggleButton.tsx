'use client'

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { CardSignInButton } from "../form/Buttons";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { fetchFavoriteId } from "@/utils/actions";

type FavoriteToggleButtonProps = {
  productId: string;
};

function FavoriteToggleButton({ productId }: FavoriteToggleButtonProps) {
  const { user, isLoaded } = useUser();
  const [favoriteId, setFavoriteId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function getFavoriteId() {
      try {
        const id = await fetchFavoriteId({ productId });
        if (mounted) {
          setFavoriteId(id);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching favorite:', error);
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    if (user?.id) {
      getFavoriteId();
    } else if (isLoaded) {
      setIsLoading(false);
    }

    return () => {
      mounted = false;
    };
  }, [user?.id, productId, isLoaded]);

  // Wait for clerk to load
  if (!isLoaded) return null;

  // Show sign in button for non-authenticated users
  if (!user?.id) return <CardSignInButton />;

  // Don't return null during loading as it causes the button to disappear
  return (
    <FavoriteToggleForm 
      favoriteId={favoriteId} 
      productId={productId} 
      isLoading={isLoading}
    />
  );
}

export default FavoriteToggleButton;