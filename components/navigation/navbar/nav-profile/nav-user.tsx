import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function NavUser() {
	return (
		<button>
			<FontAwesomeIcon
				icon={faUserCircle}
				className='text-app-400 w-8 h-8'
			/>
		</button>
	)
}
