import clsx from 'clsx'
import { Rating } from '@/types/models/product'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const stars: { id: number; isStar: boolean }[] = [
	{ id: 0, isStar: true },
	{ id: 1, isStar: true },
	{ id: 2, isStar: true },
	{ id: 3, isStar: true },
	{ id: 4, isStar: true },
	{ id: 5, isStar: false },
	{ id: 6, isStar: false },
	{ id: 7, isStar: false },
	{ id: 8, isStar: false },
	{ id: 9, isStar: false },
]

type TProps = {
	rating: Rating
	starColor?: string
	className?: string
}

const Rating: React.FC<TProps> = ({
	rating,
	starColor = 'text-yellow-400',
	className = '',
}: TProps): JSX.Element => {
	return (
		<div className={clsx(className)}>
			{stars.slice(5 - rating, 10 - rating).map(({ isStar, id }) => (
				<FontAwesomeIcon
					icon={faStar}
					key={id}
					className={clsx({
						starColor: isStar,
						'text-gray-400': !isStar,
					})}
				/>
			))}
		</div>
	)
}

export default Rating
