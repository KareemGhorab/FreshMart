import Link from 'next/link'

type TFormVariant = 'login' | 'register'

type TProps = {
	variant: TFormVariant
}

const getLinkHref = (variant: TFormVariant): string => {
	switch (variant) {
		case 'login':
			return '/auth/register'
		case 'register':
			return '/auth/login'
		default:
			return ''
	}
}

const AuthFormFooter: React.FC<TProps> = ({ variant }): JSX.Element => (
	<footer>
		<p className='text-sm'>
			{variant === 'login' ? 'Already a user? ' : null}
			{variant === 'register' ? 'New user? ' : null}
			<Link href={getLinkHref(variant)} className='text-app-400'>
				{variant === 'login' ? 'Register' : null}
				{variant === 'register' ? 'Login' : null}
			</Link>{' '}
		</p>
	</footer>
)
export default AuthFormFooter
