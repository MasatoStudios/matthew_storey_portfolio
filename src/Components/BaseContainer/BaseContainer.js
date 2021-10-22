import Container from '@mui/material/Container'
import CssBaseLine from '@mui/material/CssBaseline'
import './BaseContainer.css'

const BaseContainer = ({children}) => {
	return (
		<>
			<CssBaseLine />
			<Container maxWidth='lg' sx={{ bgcolor: '#cfe8fc' }}>
                {children}
            </Container>
		</>
	)
}

export default BaseContainer
