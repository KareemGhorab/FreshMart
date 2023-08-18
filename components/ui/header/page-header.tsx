import clsx from 'clsx'
import { IMAGE_UI } from '@/config/config'
import Image from 'next/image'
import { TImage } from '@/types/app/image'

type TProps = {
	title: string
	bgImage?: TImage
	className?: string
}

const PageHeader: React.FC<TProps> = ({
	title,
	bgImage,
	className = '',
}: TProps): JSX.Element => {
	return (
		<header className={clsx(className, 'w-full h-fit relative')}>
			{bgImage && (
				<Image
					src={bgImage.src}
					alt={bgImage.alt}
					width={bgImage.width}
					height={bgImage.height}
					className='absolute inset-0 w-full h-full -z-10'
				/>
			)}
			<div className='py-48'></div>
			<h2 className='text-5xl font-semibold text-white w-fit mx-auto'>
				{title}
			</h2>
			<div className='py-32'></div>
		</header>
	)
}

export default PageHeader
