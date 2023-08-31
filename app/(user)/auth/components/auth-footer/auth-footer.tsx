import AuthFormFooter from './auth-form-footer'
import AuthSubmit from './auth-submit'
import { TPropsWithAuthVariant } from '../../types/auth-variant'

type TProps = {
	isSubmitting: boolean
} & TPropsWithAuthVariant

const AuthFooter: React.FC<TProps> = ({
	isSubmitting,
	variant,
}): JSX.Element => (
	<footer className='flex flex-col justify-center items-center gap-3 mt-4'>
		<AuthSubmit isSubmitting={isSubmitting} variant={variant} />
		<AuthFormFooter variant={variant} />
	</footer>
)

export default AuthFooter
