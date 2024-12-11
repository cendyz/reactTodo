import { useState } from 'react'

import logoImg from '../../../images/logo.svg'
import hamburgerIcon from '../../../images/icon-hamburger.svg'
import closeMenuIcon from '../../../images/icon-close.svg'

import NavMobileMenu from './NavMobileMenu'
import './navMobile.scss'

const NavMobile = () => {
	const [active, setActive] = useState(false)
	return (
		<nav className='nav-mobile'>
			
			<img
				src={logoImg}
				alt='Company name blogr'
				className='nav-mobile-logo'
			/>
			<button
				className='nav-mobile-btn'
				onClick={() => setActive(!active)}>
				<img
					src={active ? closeMenuIcon : hamburgerIcon}
					alt='menu icon'
					className='mobile-hamburger'
				/>
			</button>
			{active && <NavMobileMenu />}
		</nav>
	)
}
export default NavMobile
