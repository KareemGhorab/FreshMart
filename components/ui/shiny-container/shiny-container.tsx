import clsx from 'clsx'

import styles from './shiny-container.module.scss'

type TProps = { className?: string } & React.PropsWithChildren

const ShinyContainer: React.FC<TProps> = ({
	children,
	className,
}: TProps): JSX.Element => (
	<div className={clsx(styles.shiny, className)}>{children}</div>
)

export default ShinyContainer
