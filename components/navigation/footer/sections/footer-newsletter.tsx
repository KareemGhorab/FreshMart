import clsx from 'clsx'

import styles from '../footer.module.scss'
import ControlText from '@/components/controls/control-text'

const FooterNewsletter: React.FC = (): JSX.Element => (
	<section className={clsx(styles['footer__newsletter'])}>
		<h4>Newsletter</h4>
		<p>
			Sign up for newsletter to receive special offers and exclusive news
			about FreshMart products
		</p>
		<div className='my-8'></div>
		<ControlText
			placeholder='Enter you email'
			value=''
			variant='button'
			btnLabel='Subscribe'
			className='w-80'
		/>
	</section>
)

export default FooterNewsletter
