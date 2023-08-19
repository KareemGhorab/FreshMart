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
	<header className={clsx(styles['section-header'], className)}>
		<h2 className={`${amatic_SC.className} text-6xl`}>{title}</h2>
		{paragraph && <p>{paragraph}</p>}
	</header>
)

export default SectionHeader
