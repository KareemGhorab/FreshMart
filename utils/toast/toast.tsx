import { ToastContainer, toast, ToastOptions } from 'react-toastify'

const options: ToastOptions = {
	position: 'top-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'colored',
}

export type TToastType = 'info' | 'success' | 'warning' | 'error' | 'default'

export const runToast = (
	message: string,
	type?: TToastType,
	extraOptions?: ToastOptions
) => {
	const finalOptions = { ...options, ...extraOptions }
	switch (type) {
		case 'error':
			toast.error(message, finalOptions)
			break
		case 'info':
			toast.info(message, finalOptions)
			break
		case 'success':
			toast.success(message, finalOptions)
			break
		case 'warning':
			toast.warning(message, finalOptions)
			break
		case 'default':
		default:
			toast(message, finalOptions)
	}
}

export const Toast: React.FC = (): JSX.Element => (
	<ToastContainer {...options} />
)
