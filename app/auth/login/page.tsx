'use client'

import { useEffect } from 'react'
import { useFormik, FormikProps } from 'formik'
import { useRouter, useSearchParams } from 'next/navigation'

import ControlButton from '@/components/controls/control-button'
import { Toast, runToast } from '@/utils/toast/toast'

import {
	TLoginForm,
	handleLogin,
	loginInitialValues,
	loginValidationSchema,
} from './form'
import AuthTextControl from '../components/auth-text-control'
import AuthFromHeader from '../components/auth-form-header'
import AuthFormFooter from '../components/auth-form-footer'

const Register: React.FC = (): JSX.Element => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const {
		errors,
		touched,
		handleSubmit,
		handleChange,
		handleBlur,
		values,
	}: FormikProps<TLoginForm> = useFormik<TLoginForm>({
		initialValues: loginInitialValues,
		validationSchema: loginValidationSchema,
		onSubmit: (values) => {
			handleLogin(values)
		},
	})

	useEffect(() => {
		searchParams.get('success') === 'true' &&
			runToast('User registered successfully', 'success')
	}, [searchParams])

	return (
		<main className='flex flex-col justify-center items-center'>
			<Toast />

			<AuthFromHeader title='Login' />

			<form
				className='flex flex-col mx-auto w-form gap-5 px-5'
				onSubmit={handleSubmit}
				noValidate
			>
				<AuthTextControl
					error={errors.email}
					touched={touched.email}
					id='email'
					label='Email address'
					name='email'
					onBlur={handleBlur}
					onChange={handleChange}
					type='email'
					value={values.email}
				/>

				<AuthTextControl
					error={errors.password}
					touched={touched.password}
					id='password'
					label='Password'
					name='password'
					onBlur={handleBlur}
					onChange={handleChange}
					type='password'
					value={values.password}
				/>

				<div className='my-2' />

				<div className='flex flex-col justify-center items-center gap-3'>
					<ControlButton
						className='w-40 text-xl'
						variant='success'
						type='submit'
					>
						Login
					</ControlButton>
					<AuthFormFooter variant='login' />
				</div>
			</form>
		</main>
	)
}

export default Register
