import PageHeader from '@/components/ui/header/page-header/page-header'

export enum AuthVariant {
	LOGIN = 'Welcome Back',
	REGISTER = 'Hello New User',
}

type TProps = {
	variant: AuthVariant
}

const AuthHeader: React.FC<TProps> = ({ variant }): JSX.Element => (
	<>
		<PageHeader
			title={variant}
			bgImage={{
				src: '/ui/bg.jpg',
				alt: 'Green Background Image',
				width: 1920,
				height: 380,
			}}
		/>
		<div className='my-16'></div>
	</>
)

export default AuthHeader
