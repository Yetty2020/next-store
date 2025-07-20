import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/products(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  try {
    if (isPublicRoute(req)) {
      return NextResponse.next();
    }

    const { userId } = await auth();

    if (!userId) {
      return NextResponse.redirect(new URL('/sign-in', req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware Error:', error);
    return NextResponse.next(); // Or redirect to a generic error page
  }
}, { debug: true });

export const config = {
  matcher: ['/((?!_next).*)'], // Simplified for test
};
