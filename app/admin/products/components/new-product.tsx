import clsx from 'clsx'
import { TPropsWithClassName } from '@/types/props'
import { prisma } from '@/prisma/db'
import { Product } from '@prisma/client'

type TProps = TPropsWithClassName

const addProduct = async (v: FormData) => {
	'use server'
	console.log(v)
	// prisma.product.create({
	// 	data: {},
	// })
}

const NewProduct: React.FC<TProps> = ({ className }): JSX.Element => (
	<form
		action={addProduct}
		className={clsx('flex flex-col gap-3', className)}
	>
		<input placeholder='Product Name' type='text' name='name' id='name' />
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
	</form>
)

export default NewProduct
