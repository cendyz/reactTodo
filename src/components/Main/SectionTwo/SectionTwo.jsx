import bgPattern from '../../../images/bg-pattern-circles.svg'
import phones from '../../../images/illustration-phones.svg'

import './SectionTwo.scss'

const SectionTwo = () => {
	return (
		<section className='section section-two'>
			<img
				src={phones}
				alt='Two phones'
				className='section-img phones-img'
			/>
			<div className='text-container'>
				<div className='text-wrapper'>
					<div className='inside-text-box'>
						<h2 className='section-title two-title'>
							State of the Art Infrastructure
						</h2>
						<p className='section-text two-text'>
							With reliability and speed in mind, worldwide data centers
							provide the backbone for ultra-fast connectivity. This
							ensures your site will load instantly, no matter where your
							readers are, keeping your site competitive.
						</p>
					</div>
				</div>
				<div className='circles-box'>
					<img src={bgPattern} alt='Circles' className='circles' />
				</div>
				
			</div>
		</section>
	)
}
export default SectionTwo
