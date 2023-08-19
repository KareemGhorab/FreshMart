import styles from './shiny-container.module.scss'

type TProps = {} & React.PropsWithChildren

const ShinyContainer: React.FC<TProps> = ({
	children,
}: TProps): JSX.Element => <div className={styles.shiny}>{children}</div>

export default ShinyContainer
