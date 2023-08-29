import clsx from 'clsx'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TPropsWithClassName } from '@/types/props'

export type TFooterContactItem = {
	paragraph: string
	icon: IconDefinition
}

type TProps = TFooterContactItem & TPropsWithClassName

const FooterContactItem: React.FC<TProps> = ({
	paragraph,
	icon,
	className,
}: TProps): JSX.Element => (
	<li className={clsx(className)}>
		<i>
			<FontAwesomeIcon icon={icon} />
		</i>
		<p>{paragraph}</p>
	</li>
)

export default FooterContactItem
