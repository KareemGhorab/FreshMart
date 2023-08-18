import clsx from 'clsx'

import styles from './controls.module.scss'

type TDefault = {
	variant: 'success' | 'outline' | 'brushed' | 'none'
	squareSide?: boolean
	className?: string
} & React.PropsWithChildren

type TButton = {
	type: 'button'
	onClick: React.MouseEventHandler
}

type TSubmit = {
	type: 'submit'
}

type TProps = TDefault & (TButton | TSubmit)

const ControlButton: React.FC<TProps> = (props: TProps): JSX.Element => {
	const { variant, type, children, squareSide = false, className = '' } = props

	const isSuccess = variant === 'success'
	const isOutline = variant === 'outline'
	const isBrushed = variant === 'brushed'
	const isNone = variant === 'none'

	return (
		<button
			className={clsx(
				styles.control,
				styles.control_button,
				{
					[styles['control_button--success']]: isSuccess,
					[styles['control_button--outline']]: isOutline,
					[styles['control_button--brushed']]: isBrushed,
					[styles['control_button--none']]: isNone,
					[styles['square-side']]: squareSide,
				},
				className
			)}
			type={type}
			onClick={type === 'button' ? (props as TButton).onClick : undefined}
		>
			{children}
		</button>
	)
}
export default ControlButton
