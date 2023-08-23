import clsx from 'clsx'
import Image from 'next/image'
import ShinyContainer from '@/components/ui/shiny-container/shiny-container'

import styles from '../footer.module.scss'

type TProps = {
	className?: string
}

const FooterBadge: React.FC<TProps> = ({ className }: TProps): JSX.Element => (
	<ShinyContainer
		className={clsx(styles['footer__badge'], 'relative', className)}
	>
		<Image
			src='/logo-white.png'
			alt='FreshMart logo'
			width={186}
			height={72}
		/>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
			adipisci natus quasi magnam inventore aperiam et, blanditiis, fuga
			esse, consectetur deserunt id earum vel. Voluptatem ullam
			repudiandae alias molestiae earum!
		</p>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
			sequi qui consectetur nesciunt. Unde?
		</p>

		<div className='absolute bottom-0 w-0 h-0 border-b-[30px] border-b-white border-x-[180px] border-x-transparent' />
	</ShinyContainer>
)

export default FooterBadge
