import { BasicProps } from '@/types/basic'
import Image from 'next/image'

type Props = {
	title: string
	onSelect: (title: string) => void
}

export default function ProductsTab({
	className = '',
	children,
	onSelect,
	title,
}: Props & BasicProps) {
	return (
		<button
			onClick={() => onSelect(title)}
			className={`flex justify-center text-app-400 hover:text-white transition-colors duration-200 relative group ${className}`}
		>
			<div className='absolute -bottom-[6px] z-10 w-[135px] h-[37px]'>
				<div className='absolute bg-white h-full w-full group-hover:scale-x-0 origin-right transition-transform duration-200 ease-out'></div>
				<Image
					className='w-full h-full'
					src='/ui/tab.png'
					alt='Green background paint'
					width={135}
					height={37}
				/>
			</div>
			<div className='flex flex-col justify-center items-center gap-4 z-20'>
				<figure>{children}</figure>
				<figcaption className='font-medium'>{title}</figcaption>
			</div>
		</button>
	)
}
