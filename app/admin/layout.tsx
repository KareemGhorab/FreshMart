import AdminSidebar from './components/sidebar/admin-sidebar'

const AdminLayout: React.FC<React.PropsWithChildren> = ({
	children,
}): JSX.Element => (
	<div className='flex'>
		<AdminSidebar />
		<main>{children}</main>
	</div>
)

export default AdminLayout
