type TProps = React.PropsWithChildren

const AuthProvider: React.FC<TProps> = ({ children }): JSX.Element => (
	<AuthProvider>{children}</AuthProvider>
)

export default AuthProvider
