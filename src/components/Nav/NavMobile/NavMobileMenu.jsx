import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import { mobileMenuData, mobileInnerMenu } from '../../../data'
import redArrow from '../../../images/icon-arrow-dark.svg'

const NavMobileMenu = ({ firstOpen }) => {
	const [active, setActive] = useState(null)
	const [openedItems, setOpenedItems] = useState(new Set())
	const [closedItems, setClosedItems] = useState(new Set())
	const [hasOpened, setHasOpened] = useState(false)

	useEffect(() => {
		if (!firstOpen) {
			setHasOpened(true)
		}
	}, [firstOpen])

	const handleActive = index => {
		setActive(prevItem => (prevItem === index ? null : index))
		setOpenedItems(prevOpenedItems => {
			const newOpenedItems = new Set(prevOpenedItems)
			if (newOpenedItems.has(index)) {
				newOpenedItems.delete(index)
				setClosedItems(prevClosedItems =>
					new Set(prevClosedItems).add(index)
				)
			} else {
				newOpenedItems.add(index)
				setClosedItems(prevClosedItems => {
					const newClosedItems = new Set(prevClosedItems)
					newClosedItems.delete(index)
					return newClosedItems
				})
			}
			return newOpenedItems
		})
	}

	return (
		<div className='mobile-menu'>
			{mobileMenuData.map(({ name, group }, index) => {
				const actualGroup = mobileInnerMenu.find(
					menu => menu.group === group
				)

				return (
					<div
						className='mobile-link-box'
						key={index}
						onClick={() => handleActive(index)}>
						<div className='main-link'>
							<p className='mobile-title'>{name}</p>
							<img
								className={`arrow-img ${
									active === index
										? 'rotated'
										: hasOpened &&
										  (openedItems.has(index) || closedItems.has(index))
										? 'no-rotated'
										: ''
								}`}
								src={redArrow}
								alt='menu link arrow icon'
							/>
						</div>
						{active === index && actualGroup && (
							<div className='mobile-inner-link-box'>
								{actualGroup.links.map(link => {
									return (
										<a href='#' className='mobile-link' key={nanoid()}>
											{link}
										</a>
									)
								})}
							</div>
						)}
					</div>
				)
			})}
			<div className='login-box'>
				<a href='#' className='login-link'>
					Login
				</a>
				<button className='btn-sign'>
					<a href='#' className='sign-link'>
						Sign Up
					</a>
				</button>
			</div>
		</div>
	)
}
export default NavMobileMenu
