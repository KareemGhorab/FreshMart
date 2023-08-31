import { object, string } from 'yup'
import { signIn } from 'next-auth/react'
import { runToast } from '@/utils/toast/toast'

export type TLoginForm = {
	email: string
	password: string
}

export const loginValidationSchema = object({
	email: string().email('Email is invalid').required('Email is required'),
	password: string().required('Password is required'),
})

export const loginInitialValues: TLoginForm = {
	email: '',
	password: '',
}

export const handleLogin = async (formValues: TLoginForm) => {
	const user = await signIn('credentials', {
		...formValues,
		redirect: false,
	})
	if (user?.error) {
		throw new Error(user.error)
	}
}
