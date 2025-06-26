import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/', '/about', '/products(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.redirect(new URL('/sign-in', req.url))
    }
  }

  // Always return a NextResponse
  return NextResponse.next()
})
