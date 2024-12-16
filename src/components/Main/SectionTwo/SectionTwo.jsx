import './SectionTwo.scss'

const SectionTwo = () => {
	return (
		<section className='section section-two'>
			<img
				src='src/images/illustration-phones.svg'
				alt=''
				className='section-img phones-img'
			/>
			<div className='text-container'>
				<h2 className='section-title two-title'>State of the Art Infrastructure</h2>
				<p className='section-text two-text'>
					With reliability and speed in mind, worldwide data centers
					provide the backbone for ultra-fast connectivity. This ensures
					your site will load instantly, no matter where your readers are,
					keeping your site competitive.
				</p>
				<div className='circles-box'>
					<img
						src='src/images/bg-pattern-circles.svg'
						alt='circles'
						className='circles'
					/>
				</div>
			</div>
		</section>
	)
}
export default SectionTwo
