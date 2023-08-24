import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import type { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { prisma } from '@/prisma/db'

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
				},
				password: { label: 'Password', type: 'password' },
				username: { label: 'Username', type: 'text' },
			},
			async authorize(credentials, req) {
				const user = {
					id: '1',
					name: 'Kareem',
					email: 'kareem@gmail.com',
				}
				return user
			},
		}),
	],
	secret: process.env.SECRET,
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24 * 30,
	},
	adapter: PrismaAdapter(prisma),
	debug: process.env.NODE_ENV === 'development',
}
