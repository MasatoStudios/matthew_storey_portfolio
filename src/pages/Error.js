import Template from '../Components/Template/Template'
import ErrorPage from '../Components/Error/Error'
import { useEffect } from 'react'
const Error = () => {
	useEffect(() => {
		document.title = '404 Page not Found'
	}, [])
	return (
		<Template>
			<ErrorPage />
		</Template>
	)
}

export default Error
