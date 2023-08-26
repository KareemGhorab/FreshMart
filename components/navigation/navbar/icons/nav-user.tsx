import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

//TODO user profile redirection

const NavUser: React.FC = () => (
	<Link href='/auth/login'>
		<FontAwesomeIcon icon={faUserCircle} className='text-app-400 w-8 h-8' />
	</Link>
)

export default NavUser
