import './Header.scss'
import headerImg from '../../images/mobile/bg-pattern-intro-mobile.svg'

const Header = () => {
	return (
		<header className='header'>
			<div className='inner-box'>
				<h1 className='header-title'>A modern publishing platform</h1>
				<p className='header-text'>
					Grow your audience and build your online brand
				</p>
				<div className='btns'>
					<button className='btn'>Start for Free</button>
					<button className='btn'>Learn More</button>
				</div>
			</div>
			<img src={headerImg} alt='Header img' className='img' />
		</header>
	)
}
export default Header
