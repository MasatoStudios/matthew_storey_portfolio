import Template from '../Components/Template/Template'
import Image from '../images/finishedMockup.png'

import '../Components/utils/variables.css'

const Portfolio = () => {
	return (
		<Template>
			<div className='image-container'>
				<img src={Image} alt='Mockup of the site' className='case-image' />
			</div>
			<div class='text-container'>
				<p className='showcase-text'>
					Working on this project was the most freedom I’ve had in a project so
					far. I was the lead developer, designer and manager whilst being the
					client at the same time. My vision for this was to create a
					minimalistic site which showcases all my skills. The whole site uses
					ES6 standards such as arrow functions and hooks with props. Overall I
					am really happy with the final piece. However, in the future I do plan
					to add a playgrounds tab where I can add all experimental features I create.
				</p>
				<h3 className='technologies'>Technologies used:</h3>
				<ul className='bullet-list'>
					<li className='bullet-points'><span>React with hooks(ES6)</span></li>
					<li className='bullet-points'><span>React-router-dom</span></li>
					<li className='bullet-points'><span>Material UI</span></li>
					<li className='bullet-points'><span>Font Awesome for React</span></li>
				</ul>
                <ul className='bullet-list'>
                    <li className='bullet-points'><span>Figma (Prototyping)</span></li>
                    <li className='bullet-points'><span>Adobe Photoshop (Mockups)</span></li>
                    <li className='bullet-points'><span>Adobe Illustrator (Graphics)</span></li>
                </ul>
			</div>
		</Template>
	)
}

export default Portfolio
