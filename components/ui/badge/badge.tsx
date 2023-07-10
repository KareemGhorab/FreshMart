import { BasicProps } from '@/types'

export default function Badge({ className = '', children }: BasicProps) {
	return (
		<div
			className={`absolute rounded-full flex justify-center items-center ${className}`}
		>
			{children}
		</div>
	)
}
