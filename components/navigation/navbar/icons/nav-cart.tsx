import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import Badge from '@/components/ui/badge/badge'

type TProps = {
	itemsCount?: number
}

//TODO cart redirection
//TODO dynamic itemsCount

const NavCart: React.FC<TProps> = ({ itemsCount = 0 }: TProps): JSX.Element => (
	<button className='relative'>
		<Badge variant='cart'>
			<span>{itemsCount}</span>
		</Badge>
		<FontAwesomeIcon
			className='text-app-400 w-8 h-8'
			icon={faBasketShopping}
		/>
	</button>
)

export default NavCart
