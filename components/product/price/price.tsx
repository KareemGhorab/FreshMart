import clsx from 'clsx'

type TProps = {
	price: number
	
	deleted?: boolean
	className?: string
}

const Price: React.FC<TProps> = ({
	price,
	className = '',
	deleted = false,
}: TProps): JSX.Element => (
	<div
		className={clsx({
			'text-app-400': !deleted,
			'text-gray-400 line-through': deleted,
		})}
	>
		${price.toFixed(2)}
	</div>
)

export default Price
