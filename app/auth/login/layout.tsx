import AuthHeader from '@/components/ui/header/page-header'

type TProps = React.PropsWithChildren

const LoginLayout: React.FC<TProps> = ({ children }: TProps): JSX.Element => {
	return (
		<main>
			<AuthHeader title='Welcome Back' />
			{children}
		</main>
	)
}

export default LoginLayout
