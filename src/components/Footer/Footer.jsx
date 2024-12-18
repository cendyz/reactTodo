import { nanoid } from 'nanoid'
import { mobileInnerMenu, mobileMenuData } from '../../data'
import './Footer.scss'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='wrapper'>
				<img src='src/images/logo.svg' alt='' className='footer-logo' />
				{mobileMenuData.map(({ name, group }) => {
					const actualGroup = mobileInnerMenu.find(
						item => item.group === group
					)
					return (
						<div className='links-container' key={nanoid()}>
							<a href='#' className='footer-main-link main-link'>
								{name}
							</a>
							<div className='links-box footer-link-box'>
								{actualGroup.links.map(link => {
									return (
										<a href='#' className='second-link' key={nanoid()}>
											{link}
										</a>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		</footer>
	)
}
export default Footer
