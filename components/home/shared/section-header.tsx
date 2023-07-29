import { BasicProps } from '@/types/basic'
import { amatic_SC } from '@/components/fonts'

type Props = {
	title: string
	paragraph?: string
}

export default function SectionHeader({
	paragraph,
	title,
}: BasicProps & Props) {
	return (
		<header className='flex items-center flex-col gap-4 my-24'>
			<h2 className={`${amatic_SC.className} text-6xl`}>{title}</h2>
			{paragraph && <p>{paragraph}</p>}
		</header>
	)
}
