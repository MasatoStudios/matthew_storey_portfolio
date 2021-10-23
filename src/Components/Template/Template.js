import Header from "../Header/Header"
import Footer from '../Footer/Footer'


const Template = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Template
