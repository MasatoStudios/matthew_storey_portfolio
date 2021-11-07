import Template from '../Components/Template/Template'
import Image from '../images/Mockup-min.png'

import { Link } from 'react-router-dom'

const UniSite = () => {
	return (
		<Template>
			<div className='image-container'>
				<img src={Image} alt='Mockup of the site' className='case-image' />
			</div>
			<div class='text-container'>
				<p className='showcase-text'>
					Luxury Choice Getaway was a fictional holiday booking company who
					needed re-branding and updating. In our 10 week semester, we were
					tasked to create a full site consisting of an index page, view
					holidays and Admin page. The wireframes and credits pages were created
					for more additional tasks towards our assignment. Throughout this
					project, we were not allowed to use any online generators or resorces
					for the design. All was built from scratch. We also used vanilla PHP
					for the View Holidays section which was challenging but an overall
					enjoyable task. The site is still hosted, so feel free to check it out{' '}
					<Link
						to={{
							pathname: 'http://unn-w20003752.newnumyspace.co.uk/index.html',
						}}
						target='_blank'
						className='hover contact-link'
					>
						here:
					</Link>
				</p>
				<h3 className='technologies'>Technologies used:</h3>
				<ul className='bullet-list'>
					<li className='bullet-points'>
						<span>HTML and CSS</span>
					</li>
					<li className='bullet-points'>
						<span>Javascript (animated hamburger menu)</span>
					</li>
					<li className='bullet-points'>
						<span>PHP (Backend)</span>
					</li>
				</ul>
				<ul className='bullet-list'>
					<li className='bullet-points'>
						<span>Adobe Photoshop (Mockups)</span>
					</li>
					<li className='bullet-points'>
						<span>Adobe Illustrator (Graphics)</span>
					</li>
				</ul>
			</div>
		</Template>
	)
}

export default UniSite
