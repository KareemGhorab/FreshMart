import { amatic_SC } from '@/components/fonts'

type TProps = {
	title: string
	paragraph?: string
}

const SectionHeader: React.FC<TProps> = ({ title, paragraph }: TProps) => (
	<header className='flex items-center flex-col gap-4 my-24'>
		<h2 className={`${amatic_SC.className} text-6xl`}>{title}</h2>
		{paragraph && <p>{paragraph}</p>}
	</header>
)

export default SectionHeader
