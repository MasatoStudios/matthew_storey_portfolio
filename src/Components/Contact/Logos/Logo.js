import './Logo.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	fab,
	faDiscord,
	faGithub,
	faTwitter,
	faLinkedin,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

library.add(
	fab,
	faDiscord,
	faGithub,
	faTwitter,
	faLinkedin,
	faInstagram,
	faEnvelope
)

const Mailto = ({ email, subject = '', body = '', children }) => {
	let params = subject || body ? '?' : ''
	if (subject) params += `subject=${encodeURIComponent(subject)}`
	if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`
	return <a href={`mailto:${email}${params}`}>{children}</a>
}

const Logo = () => {
	return (
		<div className='link-wrapper'>
			<ul className='links'>
				<div className='Column'>
					<li className='links-list hover'>
						<Mailto
							email='mattstorey@hotmail.co.uk'
							subject='General Enquiry'
							body=''
							className='hover'
						>
							<FontAwesomeIcon className='hover' icon={['fas', 'envelope']} />{' '}
							<span className='hover'>Email</span>
						</Mailto>
					</li>
					<li className='links-list hover'>
						<Link
							to={{ pathname: 'https://twitter.com/MatthewStorey__' }}
							target='_blank'
							className='hover'
						>
							<FontAwesomeIcon className='hover' icon={['fab', 'twitter']} />{' '}
							Twitter
						</Link>
					</li>
					<li className='links-list hover'>
						<Link
							to={{
								pathname: 'https://discordapp.com/users/231806830903296000/',
							}}
							target='_blank'
							className='hover'
						>
							<FontAwesomeIcon className='hover' icon={['fab', 'discord']} />{' '}
							Discord
						</Link>
					</li>
				</div>
				<div className='Column'>
					<li className='links-list'>
						<Link
							to={{
								pathname:
									'https://www.linkedin.com/in/matthew-storey-330529188/',
							}}
							target='_blank'
							className='hover'
						>
							<FontAwesomeIcon className='hover' icon={['fab', 'linkedin']} />{' '}
							Linkedin
						</Link>
					</li>
					<li className='links-list'>
						<Link
							to={{ pathname: 'https://github.com/MasatoStudios' }}
							target='_blank'
							className='hover'
						>
							<FontAwesomeIcon className='hover' icon={['fab', 'github']} />{' '}
							Github
						</Link>
					</li>
					<li className='links-list'>
						<Link className='hover disabled-link'>
							<FontAwesomeIcon className='hover' icon={['fab', 'instagram']} />{' '}
							<span class="disabled-link">Instagram</span>
						</Link>
					</li>
				</div>
			</ul>
		</div>
	)
}

export default Logo
