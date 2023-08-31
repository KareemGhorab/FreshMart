import ControlButton from '@/components/controls/control-button'
import { TPropsWithAuthVariant } from '../../types/auth-variant'
import LoadingSpinner from '@/components/ui/loading-spinner/loading-spinner'

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
			<LoadingSpinner size='lg' />
		) : (
			<span>
				{variant === 'login' ? 'Login' : null}
				{variant === 'register' ? 'Register' : null}
			</span>
		)}
	</ControlButton>
)

export default AuthSubmit
