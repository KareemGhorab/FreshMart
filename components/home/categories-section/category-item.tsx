import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'

import styles from './categories-section.module.scss'
import ControlButton from '@/components/controls/control-button'

export type TCategoryItem = {
	className: string
	image: ImageProps
	title: string
	paragraph: string
	link: LinkProps
}
type TProps = TCategoryItem

const CategoryItem: React.FC<TProps> = ({
	className,
	image,
	link,
	paragraph,
	title,
}: TProps): JSX.Element => (
	<article className={clsx('relative', className)}>
		<Link {...link}>
			<Image {...image} alt={image.alt} />
			<div className={styles.overlay}>
				<div>
					<h3 className={styles['overlay__header']}>{title}</h3>
					<div className='my-2'></div>
					<p>{paragraph}</p>
				</div>
			</div>
		</Link>
	</article>
)

export default CategoryItem
