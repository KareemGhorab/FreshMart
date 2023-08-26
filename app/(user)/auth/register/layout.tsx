import AuthHeader, { AuthVariant } from '../components/auth-header'

type TProps = React.PropsWithChildren

const LoginLayout: React.FC<TProps> = ({ children }: TProps): JSX.Element => {
	return (
		<>
			<AuthHeader variant={AuthVariant.REGISTER} />
			{children}
		</>
	)
}

export default LoginLayout
