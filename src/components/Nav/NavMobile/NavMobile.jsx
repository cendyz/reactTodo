import { useState, useEffect } from 'react'

import logoImg from '../../../images/logo.svg'
import hamburgerIcon from '../../../images/icon-hamburger.svg'
import closeMenuIcon from '../../../images/icon-close.svg'

import NavMobileMenu from './NavMobileMenu'
import './navMobile.scss'

const NavMobile = () => {
	const [open, setOpen] = useState(false)
	const [isOpen, setIsOpened] = useState(false)
	const [isClosed, setIsClosed] = useState(false)

	useEffect(() => {
		if (open) {
			setIsOpened(true)
		} else {
			setIsOpened(false)
		}
	}, [open])

	const handleOpen = () => {
		if (open) {
			setIsClosed(true)
			setTimeout(() => {
				setOpen(false)
				setIsClosed(false)
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
					onClick={handleOpen}
				/>
			</button>
			{open && <NavMobileMenu isOpen={isOpen} isClosed={isClosed} />}
		</nav>
	)
}
export default NavMobile
