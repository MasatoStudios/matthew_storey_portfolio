import './BlockContainer.css'
import { Link } from 'react-router-dom'


const BlockContainer = ({ title, relativeClass, destination }) => {
	return (
		<Link to={destination}>	
				<div className={`container box-hover container-hover ${relativeClass}`}>
					<h3 className='work-title'>{title}</h3>
				</div>
		</Link>
	)
}

export default BlockContainer
