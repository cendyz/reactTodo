import { useState, useEffect } from 'react'

import logoImg from '../../../images/logo.svg'
import hamburgerIcon from '../../../images/icon-hamburger.svg'
import closeMenuIcon from '../../../images/icon-close.svg'

import NavMobileMenu from './NavMobileMenu'
import './navMobile.scss'

const NavMobile = () => {
	const [open, setOpen] = useState(false)
	const [firstOpen, setFirstOpen] = useState(true)

	useEffect(() => {
		if (open) {
			setFirstOpen(false)
		}
	}, [open])

	return (
		<nav className='nav-mobile'>
			<img
				src={logoImg}
				alt='Company name blogr'
				className='nav-mobile-logo'
			/>
			<button className='nav-mobile-btn' onClick={() => setOpen(!open)}>
				<img
					src={open ? closeMenuIcon : hamburgerIcon}
					alt='menu icon'
					className='mobile-hamburger'
				/>
			</button>
			{open && <NavMobileMenu firstOpen={firstOpen} />}
		</nav>
	)
}
export default NavMobile
