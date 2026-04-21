'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LuAlignLeft } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { links } from '@/utils/Links';
import UserIcon from './UserIcon';
import SignOutLink from './SignOutLink';
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

function LinksDropdown() {

  const { user } = useUser();

  const isAdminUser = user?.id === process.env.NEXT_PUBLIC_ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px] text-[#503C3C]  border-2-[#503C3C] hover:bg-red-50  ' >
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48 bg-[#FFF3E3] border-0' align='end' sideOffset={20}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left text-[#503C3C]'>Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left text-[#503C3C]'>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut> 
        <SignedIn>
          {links.map((link) => {

              if (link.label === 'dashboard' && !isAdminUser) return null;
            return (
             
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className='capitalize w-full text-[#503C3C] hover:bg-[#C5A178] px-1.5 py-2 rounded-md'>
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;