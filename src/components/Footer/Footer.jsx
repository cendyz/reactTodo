import { nanoid } from 'nanoid'
import { mobileInnerMenu, mobileMenuData } from '../../data'
import './Footer.scss'

const Footer = () => {
	return (
		<footer className='footer'>
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
						{actualGroup.links.map(link => {
							return (
								<div className='links-box' key={nanoid()}>
									<a href='#' className='second-link'>
										{link}
									</a>
								</div>
							)
						})}
					</div>
				)
			})}
		</footer>
	)
}
export default Footer
