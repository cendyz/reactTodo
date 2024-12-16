import { nanoid } from 'nanoid'
import React from 'react'

import editorImg from '../../../images/mobile/illustration-editor-mobile.svg'
import { sectionOneData } from '../../../data'

const SectionOne = () => {
	return (
		<section className='section'>
			<h2 className='section-title'>Designed fo the future</h2>
			<img src={editorImg} alt='Camera picture' className='section-img' />
			{sectionOneData.map(({ title, text }) => {
				return (
					<React.Fragment key={nanoid()}>
						<h2 className='section-title'>{title}</h2>
						<p className='section-text'>{text}</p>
					</React.Fragment>
				)
			})}
		</section>
	)
}
export default SectionOne
