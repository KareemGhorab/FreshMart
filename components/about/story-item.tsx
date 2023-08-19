import clsx from 'clsx'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './our-story-section.module.scss'

export type TStoryItem = {
	icon: IconDefinition
	iconClassName: string
	title: string
	paragraph: string
	className: string
}

type TProps = TStoryItem

const StoryItem: React.FC<TProps> = ({
	className,
	icon,
	iconClassName,
	title,
	paragraph,
}: TProps): JSX.Element => (
	<article className={clsx(styles['story_item'], className)}>
		<FontAwesomeIcon icon={icon} className={iconClassName} size='2xl' />
		<h3 className={styles['story_item__header']}>{title}</h3>
		<p>{paragraph}</p>
	</article>
)

export default StoryItem
