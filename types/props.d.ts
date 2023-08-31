import { LinkProps } from 'next/link'
export type TPropsWithClassName = {
	className?: string
}

export type TLink = {
	label: string
	link: LinkProps
}
