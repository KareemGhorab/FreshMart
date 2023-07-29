import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { TBasicProps } from '@/types'
import Badge from '@/components/ui/badge/badge'

type TProps = {
	itemsCount?: number
}

export default function NavCart({ itemsCount = 0 }: TBasicProps & TProps) {
	return (
		<button className='relative'>
			<Badge className='bg-app-400 w-5 h-5 top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-sm font-medium'>
				<span>{itemsCount}</span>
			</Badge>
			<FontAwesomeIcon
				className='text-app-400 w-8 h-8'
				icon={faBasketShopping}
			/>
		</button>
	)
}
