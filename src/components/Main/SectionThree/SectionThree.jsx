import React from 'react'
import { nanoid } from 'nanoid'

import laptopImg from '../../../images/mobile/illustration-laptop-mobile.svg'
import desktopLaptopImg from '../../../images/desktop/illustration-laptop-desktop.svg'
import { sectionThreeData } from '../../../data/'
import './SectionThree.scss'

const SectionThree = () => {
	return (
		<section className='section section-three'>
			<picture>
				<source srcSet={desktopLaptopImg} media='(min-width:992px)' />
				<img
					src={laptopImg}
					alt='Camera picture'
					className='section-img camera-three-img'
				/>
			</picture>
			<div className='text-box three'>
				{sectionThreeData.map(({ title, text }) => {
					return (
						<React.Fragment key={nanoid()}>
							<h2 className='section-under-title'>{title}</h2>
							<p className='section-text three-text'>{text}</p>
						</React.Fragment>
					)
				})}
			</div>
		</section>
	)
}
export default SectionThree
