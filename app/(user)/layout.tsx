import Footer from '@/components/navigation/footer/footer'
import Navbar from '@/components/navigation/navbar/navbar'

type TProps = React.PropsWithChildren

const UserLayout: React.FC<TProps> = ({ children }): JSX.Element => (
	<>
		<Navbar />
		{children}
		<Footer />
	</>
)

export default UserLayout
