import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/', 
  '/products(.*)', 
  '/about', 
  '/sign-in(.*)', 
  '/sign-up(.*)',
]);

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  console.log('✅ Middleware Running');

  if (!isPublicRoute(req)) {
    await auth.protect(); // ✅ Enforces authentication

    const { userId } = await auth(); // ✅ Get userId AFTER protect
    const isAdminUser = userId === process.env.ADMIN_USER_ID;

    console.log('👉 userId:', userId);

    if (isAdminRoute(req) && !isAdminUser) {
      console.log('🚫 Non-admin tried to access admin route');
      return NextResponse.redirect(new URL('/', req.url));
    }
  } else {
    console.log('🔓 Public route — skipping auth.');
  }

  return NextResponse.next(); // ✅ Required to continue
});

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
