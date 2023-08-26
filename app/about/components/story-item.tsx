import clsx from 'clsx'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TPropsWithClassName } from '@/types/app/props/props'

export type TStoryItem = {
	icon: IconDefinition
	iconClassName: string
	title: string
	paragraph: string
} & TPropsWithClassName

type TProps = TStoryItem

const StoryItem: React.FC<TProps> = ({
	className,
	icon,
	iconClassName,
	title,
	paragraph,
}: TProps): JSX.Element => (
	<article
		className={clsx(
			'flex flex-col justify-center items-center gap-3 text-center',
			className
		)}
	>
		<FontAwesomeIcon icon={icon} className={iconClassName} size='2xl' />
		<h3 className={'text-xl text-app-600 font-semibold'}>{title}</h3>
		<p>{paragraph}</p>
	</article>
)

export default StoryItem
