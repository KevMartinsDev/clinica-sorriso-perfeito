import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaTooth, FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-color);
  text-decoration: none;

  svg {
    font-size: 2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;

  ${props => props.$active && `
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  `}

  &:hover {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  white-space: nowrap;

  &:hover {
    color: var(--primary-color);
  }
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #25D366;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #128C7E;
    transform: translateY(-2px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-color);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--white);
  border-top: 1px solid #eee;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  ${props => props.$isOpen && `
    @media (max-width: 768px) {
      display: block;
    }
  `}
`;

const MobileNavLink = styled(Link)`
  display: block;
  color: var(--text-dark);
  text-decoration: none;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
  font-weight: 500;

  ${props => props.$active && `
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  `}

  &:hover {
    color: var(--primary-color);
    background: rgba(46, 139, 87, 0.1);
  }
`;

const MobileContact = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
`;

const MobileContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dark);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight: 500;

  &:hover {
    color: var(--primary-color);
  }
`;

const MobileWhatsApp = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #25D366;
  color: white;
  padding: 1rem;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background: #128C7E;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/agendamento', label: 'Agendamento' },
    { path: '/galeria', label: 'Galeria' },
    { path: '/blog', label: 'Blog' },
    { path: '/contato', label: 'Contato' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <FaTooth />
          Sorriso Perfeito
        </Logo>

        <Nav>
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              $active={location.pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <ContactInfo>
          <WhatsAppButton href="https://wa.me/555591679300" target="_blank">
            <FaWhatsapp />
            WhatsApp
          </WhatsAppButton>
        </ContactInfo>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </HeaderContent>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        {navigationItems.map((item) => (
          <MobileNavLink
            key={item.path}
            to={item.path}
            $active={location.pathname === item.path}
            onClick={closeMobileMenu}
          >
            {item.label}
          </MobileNavLink>
        ))}
        <MobileWhatsApp href="https://wa.me/555591679300" target="_blank">
          <FaWhatsapp />
          WhatsApp Contato
        </MobileWhatsApp>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;