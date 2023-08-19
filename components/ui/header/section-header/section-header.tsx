import { amatic_SC } from '@/components/fonts'

import styles from './section-header.module.scss'
import clsx from 'clsx'

type TProps = {
	title: string
	paragraph?: string
	className?: string
}

const SectionHeader: React.FC<TProps> = ({
	title,
	paragraph,
	className = '',
}: TProps) => (
	<header className={clsx(styles['section_header'], className)}>
		<h2
			className={clsx(
				amatic_SC.className,
				styles['section_header__heading']
			)}
		>
			{title}
		</h2>
		{paragraph && <p>{paragraph}</p>}
	</header>
)

export default SectionHeader
