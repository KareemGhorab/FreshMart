import AuthHeader from '@/components/auth/auth-header'

const LoginLayout = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<main>
			<AuthHeader title='Welcome back' />
			{children}
		</main>
	)
}

export default LoginLayout
