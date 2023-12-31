import PageHeader from '@/components/ui/header/page-header/page-header'
import OurStorySection from './components/our-story-section'

const About: React.FC = (): JSX.Element => {
	return (
		<main className='flex flex-col justify-center items-center'>
			<PageHeader
				title='About Us'
				bgImage={{
					src: '/ui/bg.jpg',
					alt: 'Green crystal bg',
					width: 1920,
					height: 380,
				}}
			/>
			<OurStorySection />
		</main>
	)
}

export default About
