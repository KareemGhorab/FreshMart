import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import Badge from '@/components/ui/badge/badge'

import styles from '../nav.module.scss'

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
			className={styles['navbar__profile__icon']}
			icon={faBasketShopping}
		/>
	</button>
)

export default NavCart
