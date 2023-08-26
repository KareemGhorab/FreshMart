'use client'

import { useFormik, FormikProps } from 'formik'
import { useRouter } from 'next/navigation'
import ControlButton from '@/components/controls/control-button'
import { Toast, runToast } from '@/utils/toast/toast'

import {
	TRegisterForm,
	handleRegister,
	registerInitialValues,
	registerValidationSchema,
} from './form'
import logger from '@/utils/logger/logger'
import AuthFormHeader from '../components/auth-form-header'
import AuthTextControl from '../components/auth-text-control'
import AuthFormFooter from '../components/auth-form-footer'

const Register: React.FC = (): JSX.Element => {
	const router = useRouter()
	const {
		errors,
		touched,
		handleSubmit,
		handleChange,
		handleBlur,
		values,
	}: FormikProps<TRegisterForm> = useFormik<TRegisterForm>({
		initialValues: registerInitialValues,
		onSubmit: async (values) => {
			handleRegister(values)
				.then(() => router.replace('/auth/login?success=true'))
				.catch((err) => {
					// logger.error(err)
					runToast(err.response.data.message, 'error')
				})
		},
		validationSchema: registerValidationSchema,
	})

	return (
		<main className='flex flex-col justify-center items-center'>
			<Toast />
			<AuthFormHeader title='Register' />
			<form
				className='flex flex-col mx-auto w-form gap-5 px-5'
				onSubmit={handleSubmit}
				noValidate
			>
				<AuthTextControl
					id='name'
					label='Name'
					name='name'
					onBlur={handleBlur}
					onChange={handleChange}
					type='text'
					value={values.name}
					touched={touched.name}
					error={errors.name}
				/>
				<AuthTextControl
					id='email'
					label='Email address'
					name='email'
					onBlur={handleBlur}
					onChange={handleChange}
					type='email'
					value={values.email}
					touched={touched.email}
					error={errors.email}
				/>

				<AuthTextControl
					id='password'
					label='Password'
					name='password'
					onBlur={handleBlur}
					onChange={handleChange}
					type='password'
					value={values.password}
					touched={touched.password}
					error={errors.password}
				/>
				<AuthTextControl
					id='rePassword'
					label='Re-enter your password'
					name='rePassword'
					onBlur={handleBlur}
					onChange={handleChange}
					type='password'
					value={values.rePassword}
					touched={touched.rePassword}
					error={errors.rePassword}
				/>

				<div className='my-2' />

				<div className='flex flex-col justify-center items-center gap-3'>
					<ControlButton
						className='w-40 text-xl'
						variant='success'
						type='submit'
					>
						Register
					</ControlButton>
					<AuthFormFooter variant='register' />
				</div>
			</form>
		</main>
	)
}

export default Register
