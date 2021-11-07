import Template from '../Components/Template/Template'
import BlockContainer from '../Components/Work/BlockContainer/BlockContainer'

import { Link } from 'react-router-dom'

const Work = () => {
	return (
		<div>
			<Template>
				<BlockContainer
					relativeClass='website black black-background'
					title='Portfolio Case study'
					destination='/work/portfolio'
				/>
				<BlockContainer
					relativeClass='uni-site white white-background'
					title='University Assignment'
					destination='/work/uni-site'
				/>
				<h2 style={{ fontWeight: '400' }}>
					For more work please check out my{' '}
					<Link
						to={{ pathname: 'https://github.com/MasatoStudios' }}
						target='_blank'
						className='contact-link hover'
					>
						Github
					</Link>
				</h2>
				{/* <BlockContainer relativeClass='fabi-client' title="Fabi's Portfolio" /> */}
			</Template>
		</div>
	)
}

export default Work
