'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function DebugAuth() {
  return (
    <div className="text-sm text-center p-2 bg-gray-100">
      <SignedIn>
        ✅ You ARE signed in
      </SignedIn>
      <SignedOut>
        ❌ You are NOT signed in
      </SignedOut>
    </div>
  );
}
