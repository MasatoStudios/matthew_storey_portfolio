import Template from '../Components/Template/Template'
import Title from '../Components/Contact/Title/Title'
import Logo from '../Components/Contact/Logos/Logo'
import { useEffect } from 'react'


const Contact = () => {
    useEffect(() => {
			document.title = 'Matthew Storey | Contact'
		}, [])
    return (
            <Template>
                <Title />
                <Logo />
            </Template>
    )
}

export default Contact
