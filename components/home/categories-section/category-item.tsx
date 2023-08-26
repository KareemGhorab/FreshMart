import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'
import { TPropsWithClassName } from '@/types/app/props/props'

export type TCategoryItem = {
	image: ImageProps
	title: string
	paragraph: string
	link: LinkProps
} & TPropsWithClassName

type TProps = TCategoryItem

const CategoryItem: React.FC<TProps> = ({
	className,
	image,
	link,
	paragraph,
	title,
}): JSX.Element => (
	<article className={clsx('relative cursor-pointer', className)}>
		<Link {...link}>
			<Image {...image} alt={image.alt} />
			<div
				className={`absolute inset-0 z-10 bg-app-400 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 p-10 select-none first-line:text-white flex justify-center items-center flex-col`}
			>
				<div>
					<h3 className={'font-semibold text-lg'}>{title}</h3>
					<div className='my-2'></div>
					<p>{paragraph}</p>
				</div>
			</div>
		</Link>
	</article>
)

export default CategoryItem
