import { nanoid } from 'nanoid'
import React from 'react'

import editorImg from '../../../images/mobile/illustration-editor-mobile.svg'
import editorImgDesktop from '../../../images/desktop/illustration-editor-desktop.svg'
import { sectionOneData } from '../../../data'

const SectionOne = () => {
	return (
		<section className='section'>
			<h2 className='section-title'>Designed fo the future</h2>
			<picture>
			<source srcSet={editorImgDesktop} media='(min-width: 992px)'/>
			<img src={editorImg} alt='Camera picture' className='section-img camera-img' />
			</picture>
			<div className='text-box'>
				{sectionOneData.map(({ title, text }) => {
					return (
						<React.Fragment key={nanoid()}>
							<h3 className='section-under-title'>{title}</h3>
							<p className='section-text one-text'>{text}</p>
						</React.Fragment>
					)
				})}
			</div>
		</section>
	)
}
export default SectionOne
