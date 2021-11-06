import Template from '../Components/Template/Template'
import Image from '../images/finishedMockup.png'

import '../Components/utils/variables.css'

const Portfolio = () => {
	return (
		<Template>
			<p>
				Working on this project was the most freedom I’ve had in a project so
				far i was the lead developer, designer and manager whilst being the
				client at the same time. My vision for this was to create a minimalistic
				site which showcases all my skills. The whole site uses ES6 standards
				such as arrow functions and hooks with props. Overall I am really happy
				with the final piece. However in the future I do plan to add a
				playgrounds tab where I can add all experimental features I create.
				<div className='image-container'>
					<img src={Image} alt='Mockup of the site' className='case-image' />
				</div>
			</p>
		</Template>
	)
}

export default Portfolio
