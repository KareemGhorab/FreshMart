import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		if (
			request.nextUrl.pathname.startsWith('/admin') &&
			request.nextauth.token?.role !== 'ADMIN'
		)
			return NextResponse.rewrite(new URL('/denied', request.url))
	},
	{
		callbacks: {
			authorized: () => true,
		},
	}
)

export const config = {
	matcher: '/:path*',
}
