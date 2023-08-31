'use client'

import { useFormik, FormikProps } from 'formik'
import { useRouter } from 'next/navigation'

import { Toast, runToast } from '@/utils/toast/toast'
import {
	TRegisterForm,
	handleRegister,
	registerInitialValues,
	registerValidationSchema,
} from './form'
import AuthFormHeader from '../components/auth-header/auth-form-header'
import AuthTextControl, {
	TAuthTextControlProps,
} from '../components/auth-text-control'
import AuthFooter from '../components/auth-footer/auth-footer'
import { TAuthVariant } from '../types/auth-variant'

const variant: TAuthVariant = 'register'

const Register: React.FC = (): JSX.Element => {
	const router = useRouter()
	const {
		errors,
		touched,
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		isSubmitting,
	}: FormikProps<TRegisterForm> = useFormik<TRegisterForm>({
		initialValues: registerInitialValues,
		onSubmit: async (values) => {
			try {
				await handleRegister(values)
				router.replace('/auth/login?success=true')
			} catch (err: any) {
				runToast(err.response.data.message, 'error')
			}
		},
		validationSchema: registerValidationSchema,
	})

	const authControls: TAuthTextControlProps[] = [
		{
			id: 'name',
			label: 'Name',
			name: 'name',
			onBlur: handleBlur,
			onChange: handleChange,
			type: 'text',
			value: values.name,
			touched: touched.name,
			error: errors.name,
		},
		{
			id: 'email',
			label: 'Email address',
			name: 'email',
			onBlur: handleBlur,
			onChange: handleChange,
			type: 'email',
			value: values.email,
			touched: touched.email,
			error: errors.email,
		},
		{
			id: 'password',
			label: 'Password',
			name: 'password',
			onBlur: handleBlur,
			onChange: handleChange,
			type: 'password',
			value: values.password,
			touched: touched.password,
			error: errors.password,
		},
		{
			id: 'rePassword',
			label: 'Re-enter your password',
			name: 'rePassword',
			onBlur: handleBlur,
			onChange: handleChange,
			type: 'password',
			value: values.rePassword,
			touched: touched.rePassword,
			error: errors.rePassword,
		},
	]
	return (
		<main className='flex flex-col justify-center items-center'>
			<Toast />
			<AuthFormHeader title='Register' />
			<form
				className='flex flex-col mx-auto w-form gap-5 px-5'
				onSubmit={handleSubmit}
				noValidate
			>
				{authControls.map((ac) => (
					<AuthTextControl key={ac.id} {...ac} />
				))}

				<AuthFooter variant={variant} isSubmitting={isSubmitting} />
			</form>
		</main>
	)
}

export default Register
