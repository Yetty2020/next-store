"use client";

import Link from "next/link"
import { toast } from "sonner";
import { SignOutButton } from "@clerk/nextjs";

export default function SignOutLink() {
  const handleLogout = () => {
    toast("Sign Out Successfully");
   
  };

  return (
    <SignOutButton>
      <Link href="/" onClick={handleLogout} >
      Sign Out
      </Link>
      
    </SignOutButton>
  );
}
