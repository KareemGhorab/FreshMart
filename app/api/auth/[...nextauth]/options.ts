import type { NextAuthOptions, Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { object, string } from 'yup'
import bcrypt from 'bcrypt'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { prisma } from '@/prisma/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { Role } from '@prisma/client'

interface IUser {
	id: string
	name: string
	email: string
	emailVerified: Date | null
	role: Role
	cartId: number | null
}

interface ISession extends Session {
	user: IUser
}

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// Validate the body
				const schema = object({
					email: string().required().email(),
					password: string().required(),
				})
				const { email: caseSensitiveEmail, password } =
					schema.validateSync(credentials)
				const email = caseSensitiveEmail.toLowerCase()
				// Check for email existence
				const user = await prisma.user.findUnique({
					where: {
						email,
					},
				})

				if (!user || !user.hashedPassword)
					throw new Error("This email isn't registered")

				// Check password match
				const passwordMatch = bcrypt.compareSync(
					password,
					user.hashedPassword
				)

				if (!passwordMatch) throw new Error('Incorrect password')

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
