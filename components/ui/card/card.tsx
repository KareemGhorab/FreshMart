import clsx from 'clsx'

import styles from './card.module.scss'

type TProps = {
	className?: string
} & React.PropsWithChildren

const Card = ({ className, children }: TProps) => (
	<div className={clsx(styles.card, className)}>{children}</div>
)

export default Card
