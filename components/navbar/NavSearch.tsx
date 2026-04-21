'use client';
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
  }, 300);

  useEffect(() => {
    const searchValue = searchParams.get('search'); // extracted
    if (!searchValue) {
      setSearch('');
    }
  }, [searchParams]);
  return (
    <div>
      <Input
      type='search'
      placeholder='Have something youre looking for?'
      className='max-w-xs dark:bg-muted border-0 bg-white rounded-md mt-4 hidden'
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
    <CiSearch className='w-6 h-6 text-white cursor-pointer' />
      </div>
  );
}

export default NavSearch;
