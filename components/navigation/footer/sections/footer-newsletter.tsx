'use client'

import clsx from 'clsx'
import { useFormik, FormikProps } from 'formik'

import styles from '../footer.module.scss'
import ControlText from '@/components/controls/control-text'

type TNewsletter = {
	email: string
}

const FooterNewsletter: React.FC = (): JSX.Element => {
	const { values, handleChange, handleSubmit }: FormikProps<TNewsletter> =
		useFormik<TNewsletter>({
			initialValues: {
				email: '',
			},
			onSubmit: (data) => console.log(data),
		})

	return (
		<section className={clsx(styles['footer__newsletter'])}>
			<h4>Newsletter</h4>
			<p>
				Sign up for newsletter to receive special offers and exclusive
				news about FreshMart products
			</p>
			<div className='my-8'></div>
			<form onSubmit={handleSubmit}>
				<ControlText
					placeholder='Enter you email'
					value={values.email}
					variant='button'
					btnLabel='Subscribe'
					className='w-80'
					onChange={handleChange}
					name='email'
					id='email'
				/>
			</form>
		</section>
	)
}

export default FooterNewsletter
