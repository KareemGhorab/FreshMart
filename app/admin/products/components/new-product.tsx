'use client'

import clsx from 'clsx'
import { useFormik } from 'formik'
import { number, object, string } from 'yup'
import { TPropsWithClassName } from '@/types/props'
import { prisma } from '@/prisma/db'

type TForm = {
	name: string
	price: string
	discount?: string
	description?: string
}

const initialValues: TForm = {
	name: '',
	price: '',
	discount: '',
	description: '',
}

const schema = object({
	name: string().required(),
	description: string().required().min(3),
	price: number().required().moreThan(0),
	discount: number(),
})

const addProduct = async ({
	name,
	price,
	description,
	discount = '0',
}: TForm) => {
	prisma.product.create({
		data: {
			name,
			price: +price,
			description,
			discount: +discount,
		},
	})
}

type TProps = TPropsWithClassName

const NewProduct: React.FC<TProps> = ({ className }): JSX.Element => {
	const { handleSubmit, handleChange, errors, dirty } = useFormik<TForm>({
		onSubmit: addProduct,
		initialValues: initialValues,
	})
	return (
		<form className={clsx('flex flex-col gap-3', className)}>
			<input
				placeholder='Product Name'
				type='text'
				name='name'
				id='name'
			/>
			<fieldset className='flex gap-3'>
				<input
					placeholder='Product Price'
					type='number'
					name='price'
					id='price'
				/>
				<input
					placeholder='Price Discount'
					type='number'
					name='discount'
					id='discount'
				/>
			</fieldset>
			<textarea
				placeholder='Product Description'
				name='description'
				id='description'
				rows={10}
			/>
			<button type='submit'>Submit</button>
		</form>
	)
}
export default NewProduct
