import './navbar.css'

import { NavLink } from 'react-router-dom'

const navbar = () => {
	return (
		<nav className='nav-bar-links'>
			<div className='nav-links'>
				<NavLink
					activeStyle={{ fontWeight: '300' }}
					className='link hover'
					to='/'
					exact
				>
					Home
				</NavLink>
				<NavLink
					activeStyle={{ fontWeight: '300' }}
					className='link hover'
					to='/work'
					exact
				>
					Work
				</NavLink>
				<NavLink
					activeStyle={{ fontWeight: '300' }}
					className='link hover'
					to='/contact'
					exact
				>
					Contact
				</NavLink>
			</div>
			<div className='language-links'>
				<NavLink
					activeStyle={{ fontWeight: '400' }}
					className='link hover'
					to='/'
					exact
				>
					EN
				</NavLink>

				<span className='green-accent'>|</span>
				<NavLink
					activeStyle={{ fontWeight: '400' }}
					className='link hover'
					to='/jp/'
					exact
				>
					JP
				</NavLink>
			</div>
		</nav>
	)
}

export default navbar
