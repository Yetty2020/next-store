import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/', 
  '/about',
  '/products(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)'
]);

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  console.log('✅ Middleware Running');

  if (!isPublicRoute(req)) {
    await auth.protect();

    const { userId } = await auth();
    console.log('👤 userId:', userId);
    console.log('🔐 ADMIN_USER_ID:', process.env.ADMIN_USER_ID);

    const isAdmin = userId === process.env.ADMIN_USER_ID;

    if (isAdminRoute(req) && !isAdmin) {
      console.log('⛔ Non-admin trying to access admin route');
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
