import { BasicProps } from '@/types/basic'
import clsx from 'clsx'

type Props = {
	price: number
	discount: number
}

const Price = ({
	price,
	discount,
	className,
}: Props & BasicProps): JSX.Element => {
	return (
		<div className={clsx(className, 'flex gap-3 justify-center')}>
			<div className='text-app-400'>${(price - discount).toFixed(2)}</div>
			{discount && (
				<del className='block text-gray-400 line-through'>
					{price.toFixed(2)}
				</del>
			)}
		</div>
	)
}

export default Price
