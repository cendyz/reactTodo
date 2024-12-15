import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './NavMobileMenu.scss'

import { mobileMenuData, mobileInnerMenu } from '../../../../data'
import redArrow from '../../../../images/icon-arrow-dark.svg'

const NavMobileMenu = ({isOpen, isClosed}) => {
	const [active, setActive] = useState(null)

	const handleActive = index => {
		setActive(link => (link === index ? null : index))
	}

	return (
		<div
			className={`mobile-menu ${isOpen && 'active-mobile-menu'} ${
				isClosed && 'closing-mobile-menu'
			}`}>
			{mobileMenuData.map(({ name, group }, index) => {
				const actualGroup = mobileInnerMenu.find(
					link => link.group === group
				)
				return (
					<div className='mobile-link-box' key={index}>
						<div className='main-link' onClick={() => handleActive(index)}>
							<p className='mobile-title'>{name}</p>
							<img
								className={`arrow-img`}
								src={redArrow}
								alt='menu link arrow icon'
							/>
						</div>
						{active === index && (
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
