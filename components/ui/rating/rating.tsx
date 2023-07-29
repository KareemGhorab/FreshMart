import clsx from 'clsx'
import { BasicProps } from '@/types/basic'
import { Rating } from '@/types/product'
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

type Props = {
	rating: Rating
}

const Rating = ({
	rating,
	className = '',
}: Props & BasicProps): JSX.Element => {
	return (
		<div className={clsx(className)}>
			{stars.slice(5 - rating, 10 - rating).map(({ isStar, id }) => (
				<FontAwesomeIcon
					icon={faStar}
					key={id}
					className={clsx({
						'text-yellow-400': isStar,
						'text-gray-400': !isStar,
					})}
				/>
			))}
		</div>
	)
}

export default Rating
