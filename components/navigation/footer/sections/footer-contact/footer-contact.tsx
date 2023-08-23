import clsx from 'clsx'
import { TPropsWithClassName } from '@/types/app/props/props'
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import FooterContactItem, { TFooterContactItem } from './footer-contact-item'

import styles from '../../footer.module.scss'

const items: TFooterContactItem[] = [
	{
		paragraph: '123 St. Kareem Ghorab, Cairo, Egypt',
		icon: faHouse,
	},
	{
		paragraph: '+201128887241',
		icon: faPhone,
	},
	{
		paragraph: 'kareemghorab3@gmail.com',
		icon: faEnvelope,
	},
]

type TProps = TPropsWithClassName

const FooterContact: React.FC<TProps> = ({}: TProps): JSX.Element => (
	<section className={clsx(styles['footer__contact'])}>
		<h4>Contact us</h4>
		<ul>
			{items.map((item) => (
				<FooterContactItem key={item.paragraph} {...item} />
			))}
		</ul>
	</section>
)

export default FooterContact
