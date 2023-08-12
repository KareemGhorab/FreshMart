import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import styles from '../nav.module.scss'

//TODO user profile redirection

const NavUser: React.FC = () => (
	<button>
		<FontAwesomeIcon
			icon={faUserCircle}
			className={styles['navbar__profile__icon']}
		/>
	</button>
)

export default NavUser
