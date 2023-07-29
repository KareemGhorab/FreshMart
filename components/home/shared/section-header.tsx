import { TBasicProps } from '@/types'
import { amatic_SC } from '@/components/fonts'

type TProps = {
	title: string
	paragraph?: string
}

export default function SectionHeader({
	paragraph,
	title,
}: TBasicProps & TProps) {
	return (
		<header className='flex items-center flex-col gap-4 my-24'>
			<h2 className={`${amatic_SC.className} text-6xl`}>{title}</h2>
			{paragraph && <p>{paragraph}</p>}
		</header>
	)
}
