import clsx from 'clsx'
import { TBasicProps } from '@/types'


type TProps = {
	title: string
}

const AuthHeader = ({title, className = ''}: TProps & TBasicProps): JSX.Element => {
	return <header className={clsx(className)}>

	</header>
}

export default AuthHeader