import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyles } from './styles/GlobalStyles';
import ScrollToTop from './components/layout/ScrollToTop';
import ErrorBoundary from './components/layout/ErrorBoundary';
import NotFound from './components/layout/NotFound';
import CookieConsent from './components/layout/CookieConsent';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Agendamento from './pages/Agendamento';
import Galeria from './pages/Galeria';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import Contact from './pages/Contact';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <GlobalStyles />
        <Router
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;