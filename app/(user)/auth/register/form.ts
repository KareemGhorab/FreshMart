import { object, ref, string } from 'yup'
import { apiClient } from '@/utils/api/api'
import { passwordError, passwordRegex } from '@/config/config'

export type TRegisterForm = {
	name: string
	email: string
	password: string
	rePassword: string
}

export const registerValidationSchema = object({
	name: string().required('Name os required'),
	email: string().email('Email is invalid').required('Email is required'),
	password: string()
		.required('Password is required')
		.matches(passwordRegex, passwordError),
	rePassword: string()
		.required('Re-enter the password')
		.oneOf([ref('password')], 'Password mismatch'),
})

export const registerInitialValues: TRegisterForm = {
	name: '',
	email: '',
	password: '',
	rePassword: '',
}

export const handleRegister = async (formValues: TRegisterForm) => {
	return await apiClient.post('/api/auth/register', formValues)
}
