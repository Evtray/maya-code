import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Coffee, ShoppingCart, Menu, X, User, Search } from 'lucide-react'
import { theme } from '../../styles/theme'

const HeaderContainer = styled.header`
  background: ${theme.colors.surface};
  box-shadow: ${theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 1000;
`

const HeaderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};

  svg {
    width: 32px;
    height: 32px;
  }
`

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: ${theme.colors.surface};
    flex-direction: column;
    justify-content: flex-start;
    padding: ${theme.spacing.xl};
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
  }
`

const NavLink = styled(Link)`
  color: ${theme.colors.text.primary};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`

const IconButton = styled.button`
  background: transparent;
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.sm};
  position: relative;

  &:hover {
    background: ${theme.colors.coffee.cream};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

const CartBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.full};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`

const MenuButton = styled(IconButton)`
  display: none;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  min-width: 200px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }

  input {
    border: none;
    background: transparent;
    padding: 0;
    margin-left: ${theme.spacing.sm};
    
    &:focus {
      outline: none;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.text.secondary};
  }
`

interface HeaderProps {
  cartItemsCount?: number
}

export const Header: React.FC<HeaderProps> = ({ cartItemsCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo to="/">
          <Coffee />
          MayaCode
        </Logo>

        <Nav isOpen={isMobileMenuOpen}>
          <NavLink to="/productos" onClick={() => setIsMobileMenuOpen(false)}>
            Productos
          </NavLink>
          <NavLink to="/productos?category=soluble" onClick={() => setIsMobileMenuOpen(false)}>
            Café Soluble
          </NavLink>
          <NavLink to="/productos?category=grano" onClick={() => setIsMobileMenuOpen(false)}>
            Café en Grano
          </NavLink>
          <NavLink to="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>
            Nosotros
          </NavLink>
          <NavLink to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
            Contacto
          </NavLink>
        </Nav>

        <Actions>
          <SearchBar>
            <Search />
            <input type="text" placeholder="Buscar..." />
          </SearchBar>

          <IconButton>
            <User />
          </IconButton>

          <IconButton as={Link} to="/carrito">
            <ShoppingCart />
            {cartItemsCount > 0 && <CartBadge>{cartItemsCount}</CartBadge>}
          </IconButton>

          <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </MenuButton>
        </Actions>
      </HeaderWrapper>
    </HeaderContainer>
  )
}