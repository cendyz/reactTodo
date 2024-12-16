import './NavDesktop.scss'
import { mobileMenuData, mobileInnerMenu } from '../../../data'
import { nanoid } from 'nanoid'
import { useState } from 'react'

const NavDesktop = () => {
	const [active, setActive] = useState(null)

	const handleActive = index => {
		setActive(item => (item === index ? null : index))
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
						<div className='link-container' key={nanoid()}>
							<div
								className='click-box'
								onClick={() => handleActive(index)}>
								<a href='#' className='desktop-main-link'>
									{name}
								</a>
								<img
									src='src/images/icon-arrow-light.svg'
									alt='arrow icon'
								/>
							</div>
							<div className='links-box' key={nanoid()}>
								{active === index &&
									actualGroup.links.map(link => {
										return (
											<a href='#' className='desktop-link'>
												{link}
											</a>
										)
									})}
							</div>
						</div>
					)
				})}
			</div>
		</nav>
	)
}
export default NavDesktop
