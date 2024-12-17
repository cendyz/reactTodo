import './NavDesktop.scss'
import { mobileMenuData, mobileInnerMenu } from '../../../data'
import { nanoid } from 'nanoid'
import { useState } from 'react'

import arrowImg from '../../../images/icon-arrow-light.svg'

const NavDesktop = () => {
	const [active, setActive] = useState(null)
	const [activeItems, setActiveItems] = useState(new Set())
	const [unActvieItems, setUnActiveItems] = useState(new Set())

	const handleActive = index => {
		setActive(item => (item === index ? null : index))
		setActiveItems(prevItem => {
			const newItems = new Set(prevItem)
			if (newItems.has(index)) {
				newItems.delete(index)
				setUnActiveItems(unPrevItem => new Set(unPrevItem).add(index))
			} else {
				newItems.add(index)
				setUnActiveItems(unPrevItem => {
					const actualItems = new Set(unPrevItem)
					actualItems.delete(index)
					return actualItems
				})
			}
			return newItems
		})
	}

	return (
		<nav className='nav-desktop'>
			<div className='left-box'>
				<img src='src/images/logo.svg' alt='logo' className='nav-logo' />
				{mobileMenuData.map(({ name, group }, index) => {
					const actualGroup = mobileInnerMenu.find(
						item => item.group === group
					)
					return (
						<div className='link-container' key={index}>
							<div
								className='click-box'
								onClick={() => handleActive(index)}>
								<a href='#' className='desktop-main-link'>
									{name}
								</a>
								<img
									src={arrowImg}
									alt='arrow icon'
									className={`arrow-img ${
										active === index
											? 'rotated'
											: activeItems.has(index) || unActvieItems.has(index)
											? 'no-rotated'
											: ''
									}`}
								/>
							</div>
							<div className='links-box'>
								{active === index &&
									actualGroup.links.map(link => {
										return (
											<a href='#' className='desktop-link' key={nanoid()}>
												{link}
											</a>
										)
									})}
							</div>
						</div>
					)
				})}
			</div>
			<div className='right-box'>
				<button className='login-btn'>Login</button>
				<button className='sign-btn'>Sign Up</button>
			</div>
		</nav>
	)
}
export default NavDesktop
