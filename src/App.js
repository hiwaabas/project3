import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
// import Header from './component/Header/Header';
// import Container from './component/Container/Container';
// import Footer from './component/Footer/Footer';
import { Header,Footer,Hero,MostPopular, GamingLibrary} from './sections/index'
import {Container} from './component/index'
const App = () => {
    return (
        <>
     <Header />
     <Container>
        <Hero />
        <MostPopular />
        <GamingLibrary />
     </Container>
     <Footer />
        </>
    )
}
export default App;