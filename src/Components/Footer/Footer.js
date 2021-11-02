import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	fab,
	faDiscord,
	faGithub,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Mailto = ({ email, subject = '', body = '', children }) => {
	let params = subject || body ? '?' : ''
	if (subject) params += `subject=${encodeURIComponent(subject)}`
	if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`
	return <a href={`mailto:${email}${params}`}>{children}</a>
}

library.add(fab, faDiscord, faEnvelope, faTwitter, faGithub)

const Footer = () => {
	return (
		<footer>
			<h5 className='footer-title'>
				<strong>©</strong> 2021 Matthew Storey
			</h5>

			<div class='links'>
				<ul class='icon-links'>
					<li className='icon-list-links'>
						<Link
							to={{
								pathname: 'https://www.google.com',
							}}
							target='_blank'
						>
							<FontAwesomeIcon
								className='social-media-icons'
								icon={['fab', 'discord']}
							/>
						</Link>
					</li>
					<li className='icon-list-links'>
						<Mailto
							email='mattstorey@hotmail.co.uk'
							subject='General Enquiry'
							body=''
						>
							<FontAwesomeIcon
								className='social-media-icons'
								icon={['fas', 'envelope']}
							/>
						</Mailto>
					</li>
					<li className='icon-list-links'>
						<Link to={{ pathname: 'https://bing.com' }} target='_blank'>
							<FontAwesomeIcon
								className='social-media-icons'
								icon={['fab', 'github']}
							/>
						</Link>
					</li>
					<li className='icon-list-links'>
						<Link to={{ pathname: 'https://www.twitter.com' }} target='_blank'>
							<FontAwesomeIcon
								className='social-media-icons'
								icon={['fab', 'twitter']}
							/>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
