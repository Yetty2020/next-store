'use client';

import { usePathname } from 'next/navigation';
import FormContainer from '../form/FormContainer';
import { toggleFavoriteAction } from '@/utils/actions';
import { CardSubmitButton } from '../form/Buttons';

type FavoriteToggleFormProps = {
  productId: string;
  favoriteId: string | null;
  isLoading?: boolean;
};

function FavoriteToggleForm({
  productId,
  favoriteId,
  isLoading = false,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  
  const toggleAction = toggleFavoriteAction.bind(null, {
    productId,
    favoriteId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton 
        isFavorite={Boolean(favoriteId)} 
        disabled={isLoading}
      />
    </FormContainer>
  );
}

export default FavoriteToggleForm;