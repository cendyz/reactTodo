import { useState } from 'react'
import { nanoid } from 'nanoid'

import { mobileMenuData, mobileInnerMenu } from '../../../data'

import redArrow from '../../../images/icon-arrow-dark.svg'

const NavMobileMenu = () => {
	const [active, setActive] = useState(null)

	const handleActive = index => {
		setActive(prevActive => (prevActive === index ? null : index))
	}
	return (
		<div className='mobile-menu'>
			{mobileMenuData.map(({ name }, index) => {
				return (
					<div className='mobile-link-box' key={nanoid()}>
						<div className='main-link' onClick={() => handleActive(index)}>
							<p className='mobile-title'>{name}</p>
							<img
								src={redArrow}
								alt='menu link arrow icon'
								className='mobile-arrow'
								style={{
									transform:
										active === index ? 'rotate(180deg)' : 'rotate(0deg)',
									transition: 'transform 0.2s',
								}}
							/>
						</div>
						{active === index && (
							<div className='mobile-inner-link-box'>
								{mobileInnerMenu.map(({ innerName }) => {
									return (
										<a href='#' className='mobile-link' key={nanoid()}>
											{innerName}
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

{
}