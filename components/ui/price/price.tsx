import clsx from 'clsx'

type TProps = {
	price: number
	discount: number
	className?: string
}

const Price: React.FC<TProps> = ({
	price,
	discount,
	className = '',
}: TProps): JSX.Element => {
	return (
		<div className={clsx('flex gap-3 justify-center', className)}>
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
