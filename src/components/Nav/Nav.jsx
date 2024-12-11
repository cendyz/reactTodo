import './nav.scss'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import NavMobile from './NavMobile/NavMobile'
import NavDesktop from './NavDesktop/NavDesktop'

const Nav = () => {
	return (
		<>
			<NavMobile />
			<NavDesktop />
		</>
	)
}
export default Nav
