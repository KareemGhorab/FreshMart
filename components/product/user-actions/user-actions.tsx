import clsx from 'clsx'
import ControlButton from '@/components/controls/control-button'

import styles from './user-actions.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCartShopping,
	faEye,
	faHeart,
} from '@fortawesome/free-solid-svg-icons'

type TProps = {
	productSlug: string
	className?: string
}

// TODO
const handleAddToCart = (productSlug: string) => {}
const handleAddToWishlist = (productSlug: string) => {}
const handleViewItem = (productSlug: string) => {}

const UserActions: React.FC<TProps> = ({
	className = '',
	productSlug,
}: TProps): JSX.Element => (
	<div className={clsx(styles['user_actions'], className)}>
		<ControlButton
			variant='success'
			type='button'
			onClick={() => handleAddToCart(productSlug)}
			className='w-9 h-9'
		>
			<FontAwesomeIcon icon={faCartShopping} />
		</ControlButton>
		<ControlButton
			variant='success'
			type='button'
			onClick={() => handleAddToWishlist(productSlug)}
			className='w-9 h-9'
		>
			<FontAwesomeIcon icon={faHeart} />
		</ControlButton>
		<ControlButton
			variant='success'
			type='button'
			onClick={() => handleViewItem(productSlug)}
			className='w-9 h-9'
		>
			<FontAwesomeIcon icon={faEye} />
		</ControlButton>
	</div>
)

export default UserActions
