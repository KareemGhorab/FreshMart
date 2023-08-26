import { NextRequest, NextResponse } from 'next/server'
import { object, string } from 'yup'
import bcrypt from 'bcrypt'
import { prisma } from '@/prisma/db'
import { checkAsyncFunction } from '../../utils/error-handling/error-handler'
import { HttpError } from '../../utils/error-handling/app-error'
import { passwordError, passwordRegex } from '@/config/config'

export const POST = (req: NextRequest) =>
	checkAsyncFunction(req, async (request: NextRequest): Promise<Response> => {
		const body = await request.json()

		// Body Validation
		const schema = object({
			name: string().required(),
			email: string().email().required(),
			password: string().matches(passwordRegex, passwordError).required(),
		})

		const { email, name, password } = await schema.validate(body)

		// Email Conflict Check
		const userExist = await prisma.user.findUnique({
			where: {
				email,
			},
		})

		if (userExist)
			throw new HttpError(
				'Duplicate User',
				'This email address is already registered',
				409
			)

		// Hash Password
		const hashedPassword = bcrypt.hashSync(
			password,
			+(process.env.SALT_ROUNDS ?? 10)
		)

		// Make a New User
		const user = await prisma.user.create({
			data: {
				name,
				email,
				hashedPassword,
				role: 'USER',
			},
		})

		return NextResponse.json(user, { status: 201 })
	})
