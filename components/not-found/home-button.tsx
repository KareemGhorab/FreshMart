'use client'

import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ControlButton from '../controls/control-button'

type TProps = {
	className?: string
}

const HomeButton: React.FC<TProps> = ({
	className = '',
}: TProps): JSX.Element => {
	const router = useRouter()

	return (
		<ControlButton
			className={clsx(
				'flex justify-center items-center gap-2',
				className
			)}
			variant='success'
			type='button'
			onClick={() => router.push('/')}
		>
			<FontAwesomeIcon icon={faHome} />
			<p className='mt-1'>Back to Homepage</p>
		</ControlButton>
	)
}

export default HomeButton
