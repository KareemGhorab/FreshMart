import { object, string } from 'yup'
import { signIn } from 'next-auth/react'

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

export const handleLogin = (formValues: TLoginForm) => {
	signIn('credentials', {
		...formValues,
		redirect: false,
	})
		.then((user) => console.log({ user }))
		.catch((err) => console.log({ err }))
}
