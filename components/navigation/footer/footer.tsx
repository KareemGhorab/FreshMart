import clsx from 'clsx'
import FooterBadge from './sections/footer-badge'
import FooterNav from './sections/footer-nav/footer-nav'
import FooterContact from './sections/footer-contact/footer-contact'
import FooterNewsletter from './sections/footer-newsletter'

import styles from './footer.module.scss'

const Footer: React.FC = (): JSX.Element => (
	<>
		<div className='my-80' />
		<footer className={clsx(styles.footer, 'mx-auto')}>
			<FooterBadge />
			<FooterNav />
			<FooterNewsletter />
			<FooterContact />
		</footer>
	</>
)

export default Footer
