import { TBasicProps } from '@/types/basic'

export default function Badge({ className = '', children }: TBasicProps) {
	return (
		<div
			className={`absolute rounded-full flex justify-center items-center ${className}`}
		>
			{children}
		</div>
	)
}
