import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import styles from '../nav.module.scss'
import Link from 'next/link'

//TODO user profile redirection

const NavUser: React.FC = () => {
	return (
		<Link href='/auth/login'>
			<FontAwesomeIcon
				icon={faUserCircle}
				className={styles['navbar__profile__icon']}
			/>
		</Link>
	)
}
export default NavUser
