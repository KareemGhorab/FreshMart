import AuthHeader, { AuthVariant } from '../components/auth-header'

type TProps = React.PropsWithChildren

const LoginLayout: React.FC<TProps> = ({ children }: TProps): JSX.Element => (
	<>
		<AuthHeader variant={AuthVariant.LOGIN} />
		{children}
	</>
)

export default LoginLayout
