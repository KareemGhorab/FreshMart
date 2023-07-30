import clsx from 'clsx'
import { amatic_SC } from '@/components/fonts'
import styles from './login.module.css'
import Link from 'next/link'

const Login = (): JSX.Element => {
	const login = async () => {
		'use server'
	}

	return (
		<main className='flex flex-col justify-center items-center'>
			<div className='my-10'></div>
			<header className='mb-3'>
				<h3 className={clsx(amatic_SC.className, 'text-5xl')}>Login</h3>
			</header>
			<form className='flex flex-col mx-auto w-[700px]' action={login}>
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' id='email' />
				<div className='my-4'></div>
				<label htmlFor='password'>Password</label>
				<input type='password' name='password' id='password' />
				<div className='my-3'></div>
				<div className='flex flex-col justify-center items-center'>
					<button
						type='submit'
						className={clsx(styles['btn'], styles['btn-submit'])}
					>
						Login
					</button>
					<div className='my-1'></div>
					<p>
						New user?{' '}
						<Link href='/auth/register' className='text-app-400'>
							Register
						</Link>{' '}
					</p>
				</div>
			</form>
		</main>
	)
}

export default Login
