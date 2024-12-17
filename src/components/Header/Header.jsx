import './Header.scss'
import headerImg from '../../images/mobile/bg-pattern-intro-mobile.svg'
import desktopHeader from '../../images/desktop/bg-pattern-intro-desktop.svg'

const Header = () => {
	return (
		<header className='header'>
			<div className='inner-box'>
				<h1 className='header-title'>A modern publishing platform</h1>
				<p className='header-text'>
					Grow your audience and build your online brand
				</p>
				<div className='btns'>
					<button className='btn start'>Start for Free</button>
					<button className='btn learn'>Learn More</button>
				</div>
			</div>
			<picture>
				<source srcSet={desktopHeader} media='(min-width: 992px)' />
				<img src={headerImg} alt='Header img' className='img' />
			</picture>
		</header>
	)
}
export default Header
