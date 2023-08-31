import clsx from 'clsx'
import styles from './auth.module.scss'

export type TAuthTextControlProps = {
	label: string
	error?: string
	touched?: boolean
	onChange: React.ChangeEventHandler
	onBlur: React.FocusEventHandler
	value: string
	type: 'text' | 'email' | 'password'
	name: string
	id: string
}

const AuthTextControl: React.FC<TAuthTextControlProps> = ({
	error,
	label,
	onBlur,
	onChange,
	touched,
	value,
	type,
	id,
	name,
}): JSX.Element => (
	<fieldset className={styles.fieldset}>
		<label
			htmlFor={id}
			className={clsx({
				[styles.invalid]: error && touched,
			})}
		>
			{label}
		</label>
		<input
			type={type}
			name={name}
			id={id}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			className={clsx({
				[styles.invalid]: error && touched,
			})}
		/>
		<small>{error && touched && error}</small>
	</fieldset>
)

export default AuthTextControl
