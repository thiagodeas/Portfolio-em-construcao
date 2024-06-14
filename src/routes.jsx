// react Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';

const AppRoutes = () => (
    // iniciando o uso do react-router-dom 
    <BrowserRouter>
        {/* cabeçalho estilizado */}
        <Header />
        {/* container estilizado */}
        <Container>
            <Routes>
                {/* rota para a página Home */}
                <Route path="/" element={<Home />}></Route>
                {/* rota para a página About */}
                <Route path="/aboutme" element={<About />}></Route>
                {/* rota para a página de Projects*/}
                <Route path="/projects" element={<Projects />}></Route>
                {/* rota para a página de Contact */}
                <Route path="/contact" element={<Contact />}></Route>
                {/*rota para a página 404*/}
                <Route path="/*" element={<Page404 />}></Route>
            </Routes>
        </Container>
        {/* rodapé estilizado */}
        <Footer />
    </BrowserRouter>
);

export default AppRoutes;
