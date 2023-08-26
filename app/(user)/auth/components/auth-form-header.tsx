import clsx from 'clsx'
import { amatic_SC } from '@/components/fonts'

type TProps = { title: string }

const AuthFormHeader: React.FC<TProps> = ({ title }): JSX.Element => (
	<>
		<h3 className={clsx(amatic_SC.className, 'text-5xl')}>{title}</h3>
		<div className='my-3' />
	</>
)

export default AuthFormHeader
