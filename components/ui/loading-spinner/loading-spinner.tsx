import { TPropsWithClassName } from '@/types/props'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type TProps = { size: SizeProp } & TPropsWithClassName

const LoadingSpinner: React.FC<TProps> = ({ size, className }): JSX.Element => (
	<FontAwesomeIcon className={className} icon={faSpinner} size={size} spin />
)

export default LoadingSpinner
