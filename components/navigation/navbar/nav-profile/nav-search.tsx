import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function NavSearch() {
	return (
		<form>
			<div className='relative'>
				<input
					type='text'
					placeholder='Search'
					className='rounded-full w-44 transition-all duration-500 focus:w-52'
				/>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className='text-app-200 absolute right-4 top-1/2 transform -translate-y-1/2'
				/>
			</div>
		</form>
	)
}
