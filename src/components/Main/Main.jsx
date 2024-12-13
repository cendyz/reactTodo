import { useState, useEffect, useRef } from 'react'
import './main.scss'

const Main = () => {
	return (
		<main className='main'>
			<section className='section'>
				<h2 className='section-title'>Designed fo the future</h2>
				<img
					src='src/images/mobile/illustration-editor-mobile.svg'
					alt='Camera picture'
					className='section-img'
				/>
				<h2 className='section-title'>Intoducing an extensible editor</h2>
				<p className='section-text'>
					Blogr features an exceedingly intuitive interface which lets you
					focus on one thing: creating content. The editor supports
					management of multiple blogs and allows easy manipulation of
					embeds such as images, videos, and Markdown. Extensibility with
					plugins and themes provide easy ways to add functionality or
					change the looks of a blog.
				</p>
				<h2 className='section-title'>Robust content management</h2>
				<p className='section-text'>
					Flesible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
				</p>
			</section>
		</main>
	)
}
export default Main
