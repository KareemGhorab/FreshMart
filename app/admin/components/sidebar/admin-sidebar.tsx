import clsx from 'clsx'
import { TPropsWithClassName } from '@/types/app/props/props'

type TProps = TPropsWithClassName

const AdminSidebar: React.FC<TProps> = ({ className }): JSX.Element => (
	<aside className={clsx('bg-app-400 w-sidebar h-screen', className)}></aside>
)

export default AdminSidebar
