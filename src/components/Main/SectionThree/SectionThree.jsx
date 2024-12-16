import React from 'react'
import { nanoid } from 'nanoid'

import laptopImg from '../../../images/mobile/illustration-laptop-mobile.svg'
import { sectionThreeData } from '../../../data/'
import './SectionThree.scss'

const SectionThree = () => {
	return (
		<section className='section section-three'>
			<img
				src={laptopImg}
				alt='Camera picture'
				className='section-img three-img'
			/>
			{sectionThreeData.map(({ title, text }) => {
				return (
					<React.Fragment key={nanoid()}>
						<h2 className='section-title'>{title}</h2>
						<p className='section-text three-text'>{text}</p>
					</React.Fragment>
				)
			})}
		</section>
	)
}
export default SectionThree
