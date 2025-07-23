import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <div className="app">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'Roboto, sans-serif',
      backgroundColor: '#f8f9fa'
    }}>
      <h1 style={{ 
        color: '#2E8B57', 
        marginBottom: '1rem',
        fontSize: '3rem'
      }}>
        Clínica Sorriso Perfeito
      </h1>
      <p style={{ 
        color: '#666', 
        fontSize: '1.2rem',
        textAlign: 'center'
      }}>
        Seu sorriso é nossa especialidade
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#87CEEB',
        borderRadius: '8px',
        color: 'white'
      }}>
        Projeto React configurado com sucesso! 🦷
      </div>
    </div>
  );
}

export default App;