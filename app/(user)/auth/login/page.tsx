'use client'

import { useEffect } from 'react'
import { useFormik, FormikProps } from 'formik'
import { useRouter, useSearchParams } from 'next/navigation'

import { Toast, runToast } from '@/utils/toast/toast'
import {
	TLoginForm,
	handleLogin,
	loginInitialValues,
	loginValidationSchema,
} from './form'
import AuthTextControl, {
	TAuthTextControlProps,
} from '../components/auth-text-control'
import AuthFromHeader from '../components/auth-header/auth-form-header'
import { TAuthVariant } from '../types/auth-variant'
import AuthFooter from '../components/auth-footer/auth-footer'

const variant: TAuthVariant = 'login'

const Login: React.FC = (): JSX.Element => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const {
		errors,
		touched,
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		isSubmitting,
	}: FormikProps<TLoginForm> = useFormik<TLoginForm>({
		initialValues: loginInitialValues,
		validationSchema: loginValidationSchema,
		onSubmit: async (values) => {
			try {
				await handleLogin(values)
				router.replace('/')
			} catch (err: any) {
				runToast(err.message, 'error')
			}
		},
	})

	useEffect(() => {
		searchParams.get('success') === 'true' &&
			runToast('User registered successfully', 'success')
	}, [searchParams])

	const authControls: TAuthTextControlProps[] = [
		{
			error: errors.email,
			touched: touched.email,
			id: 'email',
			label: 'Email address',
			name: 'email',
			onBlur: handleBlur,
			onChange: handleChange,
			type: 'email',
			value: values.email,
		},
		{
			error: errors.password,
			touched: touched.password,
			id: 'password',
			label: 'Password',
			name: 'password',
			onBlur: handleBlur,
			onChange: handleChange,
			type: 'password',
			value: values.password,
		},
	]

	return (
		<main className='flex flex-col justify-center items-center'>
			<Toast />

			<AuthFromHeader title='Login' />

			<form
				className='flex flex-col mx-auto w-form gap-5 px-5'
				onSubmit={handleSubmit}
				noValidate
			>
				{authControls.map((ac) => (
					<AuthTextControl key={ac.id} {...ac} />
				))}

				<AuthFooter isSubmitting={isSubmitting} variant={variant} />
			</form>
		</main>
	)
}

export default Login
