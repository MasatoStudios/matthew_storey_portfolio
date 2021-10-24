import Container from '@mui/material/Container'
import CssBaseLine from '@mui/material/CssBaseline'
import './BaseContainer.css'
import '../utils/variables.css';

const BaseContainer = ({children}) => {
	return (
		<>
			<CssBaseLine />
			<Container maxWidth='xl' className="yellow-test">
                {children}
            </Container>
		</>
	)
}

export default BaseContainer
