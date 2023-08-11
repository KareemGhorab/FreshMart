import clsx from 'clsx'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './controls.module.scss'
import ControlButton from './control-button'

type TDefault = {
	value: string
	placeholder: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	onBlur?: React.FocusEventHandler<HTMLInputElement>
	className?: string
}

type TNone = {
	variant?: 'none'
}

type TSearch = {
	variant?: 'search'
}

type TButton = {
	variant?: 'button'
	btnLabel?: string
}

type TProps = TDefault & (TButton | TSearch | TNone)

const ControlText: React.FC<TProps> = (props: TProps): JSX.Element => {
	const {
		value,
		placeholder,
		onChange,
		onBlur,
		variant = 'none',
		className = '',
	} = props

	const isSearch = variant === 'search'
	const isButton = variant === 'button'
	const isNone = variant === 'none'

	return (
		<div className={clsx(styles.wrapper)}>
			<input
				type='text'
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				placeholder={placeholder}
				className={clsx(
					styles.control,
					styles.control_text,
					{
						[styles['control_text--search']]: isSearch,
						[styles['control_text--button']]: isButton,
						[styles['control_text--none']]: isNone,
					},
					className
				)}
			/>
			{isSearch && (
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className={clsx(styles['control_text__icon'])}
				/>
			)}
			{isButton && (
				<ControlButton
					className={styles['control_text__button']}
					squareSide={true}
					variant='success'
					type='submit'
				>
					{(props as TButton).btnLabel}
				</ControlButton>
			)}
		</div>
	)
}

export default ControlText
