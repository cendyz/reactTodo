import { useState, useEffect } from 'react'

import logoImg from '../../../images/logo.svg'
import hamburgerIcon from '../../../images/icon-hamburger.svg'
import closeMenuIcon from '../../../images/icon-close.svg'

import NavMobileMenu from './NavMobileMenu'
import './navMobile.scss'

const NavMobile = () => {
	const [open, setOpen] = useState(false)
	const [firstOpen, setFirstOpen] = useState(true)
	const [isClosing, setIsClosing] = useState(false)

	useEffect(() => {
		if (open) {
			setFirstOpen(false)
		}
	}, [open])

	   const handleToggle = () => {
				if (open) {
					setIsClosing(true)
					setTimeout(() => {
						setOpen(false)
						setIsClosing(false)
					}, 100)
				} else {
					setOpen(true)
				}
			}

	return (
		<nav className='nav-mobile'>
			<img
				src={logoImg}
				alt='Company name blogr'
				className='nav-mobile-logo'
			/>
			<button className='nav-mobile-btn'>
				<img
					src={open ? closeMenuIcon : hamburgerIcon}
					alt='menu icon'
					className='mobile-hamburger'
					onClick={handleToggle}
				/>
			</button>
			{open && (
				<NavMobileMenu
					firstOpen={firstOpen}
					open={open}
					isClosing={isClosing}
				/>
			)}
		</nav>
	)
}
export default NavMobile
