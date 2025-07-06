'use client';

import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { LuUser } from 'react-icons/lu';

export default function UserIcon() {
  const { user } = useUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <div className="relative w-6 h-6">
        <Image
          src={profileImage}
          alt="profile image"
          fill
          className="rounded-full object-cover"
        />
      </div>
    );
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}
