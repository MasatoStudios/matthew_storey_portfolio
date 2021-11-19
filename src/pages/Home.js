import Template from '../Components/Template/Template'
import Title from '../Components/Home/Title/Title'
import About from '../Components/Home/About/About'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
			document.title = 'Matthew Storey | Home'
		}, [])
    return (
        <>
            <Template>
                <Title />
                <About />
            </Template>
        </>
    )
}

export default Home
