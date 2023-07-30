import AuthHeader from '@/components/auth/auth-header'

const LoginLayout = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<main>
			<AuthHeader title='Welcome Back' />
			{children}
		</main>
	)
}

export default LoginLayout
