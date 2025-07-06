import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/products(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return NextResponse.next()
  }

  const { userId } = await auth()

  if (!userId) {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  return NextResponse.next()
},

{ debug: true },)

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|.*\\..*).*)",
    // Always run for API routes
    '/(api|trpc)(.*)',
  ]
}
