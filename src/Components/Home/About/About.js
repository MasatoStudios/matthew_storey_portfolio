import './about.css'
import { NavLink } from 'react-router-dom'

const About = () => {
	return (
		<div className='about-section'>
			<h2 className='about-me-heading'>About me:</h2>
			<p className='first-about-paragraph'>
				Hi I’m Matthew. Currently based in UK, with around 1 year of experience
				in front end development. I have serious passion to work alongside you to
				create a unique project. I aim to <strong>materialise</strong> your
				vision in the form of UI/UX design and then implement it with
				technologies such as <strong>React</strong>
				{" "}and <strong>tailwind css</strong>. I primarily work with{' '}
				<strong>C++</strong> and <strong>Javascript</strong>, but I love to
				learn so I am willing to work in any framework or language.
			</p>
			<p className='second-about-paragraph'>
				Alongside freelancing, I am currently a 2nd year{' '}
				<strong>Cyber Security</strong> and{" "}
				<strong>Computer Networks</strong> student at Northumbria University.{' '}
				<strong>Solving Problems</strong>
				 {" "}and <strong>learning how things work</strong> is my motivation, so no
				challenge is too big. On top of this, I spend my spare time either doing
				photography, playing games or learning Japanese, as my dream is to one
				day live there.
			</p>
			<p className='third-about-paragraph'>
				For any queries, please don’t hesitate to contact me. For more info
				please check out the {" "}
				<NavLink to='/contact' className='contact-link hover'>
				Contact 
				</NavLink>
				 {" "}page
			</p>
		</div>
	)
}

export default About
