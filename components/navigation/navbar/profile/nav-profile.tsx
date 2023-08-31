'use client'

import { useFormik } from 'formik'
import { object, string } from 'yup'
import ControlText from '@/components/controls/control-text'
import AuthProvider from '@/context/auth-provider'
import NavCart from '../icons/nav-cart'
import NavUser from '../icons/nav-user/nav-user'

type TFormType = {
	query: string
}

const initialFormValues: TFormType = {
	query: '',
}

const validationSchema = object({
	query: string().required(),
})

// TODO: handle search
const handleQuerySearch = () => {}

const NavProfile: React.FC = (): JSX.Element => {
	const { values, handleChange, handleBlur, handleSubmit } =
		useFormik<TFormType>({
			initialValues: initialFormValues,
			onSubmit: () => handleQuerySearch(),
			validationSchema: validationSchema,
		})

	return (
		<div className='flex justify-end items-center gap-5'>
			<form onSubmit={handleSubmit}>
				<ControlText
					variant='search'
					placeholder='Search'
					value={values.query}
					id='query'
					name='query'
					onBlur={handleBlur}
					onChange={handleChange}
				/>
			</form>
			<NavCart />
			<AuthProvider>
				<NavUser />
			</AuthProvider>
		</div>
	)
}
export default NavProfile
