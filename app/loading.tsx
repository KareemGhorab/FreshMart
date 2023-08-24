import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading: React.FC = (): JSX.Element => (
	<main className='flex justify-center items-center h-screen'>
		<FontAwesomeIcon icon={faSpinner} size='5x' />
	</main>
)

export default Loading
