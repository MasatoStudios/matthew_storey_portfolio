import Template from '../Components/Template/Template'
import BlockContainer from '../Components/Work/BlockContainer/BlockContainer'

const Work = () => {
	return (
		<div>
			<Template>
				<BlockContainer
					relativeClass='website black'
					title='Portfolio Case study'
					destination='/work/portfolio'
				/>
				<BlockContainer
					relativeClass='uni-site white'
					title='University Assignment'
					destination='/work/uni-site'
				/>
				<BlockContainer relativeClass='fabi-client' title="Fabi's Portfolio" />
			</Template>
		</div>
	)
}

export default Work
