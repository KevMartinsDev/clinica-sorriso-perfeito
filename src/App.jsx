import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Agendamento from './pages/Agendamento';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;