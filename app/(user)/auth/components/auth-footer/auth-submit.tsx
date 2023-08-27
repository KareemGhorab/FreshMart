import ControlButton from '@/components/controls/control-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { TPropsWithAuthVariant } from '../../types/auth-variant'

type TProps = { isSubmitting: boolean } & TPropsWithAuthVariant

const AuthSubmit: React.FC<TProps> = ({
	isSubmitting,
	variant,
}): JSX.Element => (
	<ControlButton
		className='w-40 text-xl h-11'
		variant='success'
		type='submit'
	>
		{isSubmitting ? (
			<FontAwesomeIcon icon={faSpinner} size='lg' />
		) : (
			<span>
				{variant === 'login' ? 'Login' : null}
				{variant === 'register' ? 'Register' : null}
			</span>
		)}
	</ControlButton>
)

export default AuthSubmit
