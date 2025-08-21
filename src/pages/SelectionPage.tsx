import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Coffee, Zap, ArrowRight, Check } from 'lucide-react'
import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.coffee.dark} 0%, ${theme.colors.coffee.medium} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
`

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  
  h1 {
    color: ${theme.colors.coffee.cream};
    font-size: 3rem;
    margin-bottom: ${theme.spacing.md};
    font-family: ${theme.fonts.heading};
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }
  
  p {
    color: ${theme.colors.coffee.cream};
    font-size: 1.3rem;
    opacity: 0.9;
  }
`

const SelectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const ProductOption = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xxl};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    
    &::before {
      transform: translateX(0);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${theme.colors.secondary};
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
`

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.coffee.cream};
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.lg};
  
  svg {
    width: 40px;
    height: 40px;
    color: ${theme.colors.primary};
  }
`

const ProductTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};
`

const ProductDescription = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
`

const Features = styled.ul`
  list-style: none;
  margin-bottom: ${theme.spacing.xl};
`

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.text.secondary};
  
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.success};
  }
`

const CTAButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.md};
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.coffee.dark};
    gap: ${theme.spacing.md};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const Badge = styled.span`
  position: absolute;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  background: ${theme.colors.secondary};
  color: ${theme.colors.coffee.dark};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-size: 0.9rem;
  font-weight: bold;
`

const FromSocial = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  
  span {
    background: rgba(255, 255, 255, 0.2);
    color: ${theme.colors.coffee.cream};
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.full};
    font-size: 0.9rem;
    display: inline-block;
  }
`

const SelectionPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Content>
        <FromSocial>
          <span>🔥 Oferta Exclusiva desde Redes Sociales - 20% OFF Primera Compra</span>
        </FromSocial>
        
        <Header>
          <h1>Bienvenido a MayaCode</h1>
          <p>Selecciona tu experiencia de café perfecta</p>
        </Header>
        
        <SelectionGrid>
          <ProductOption onClick={() => navigate('/lead-capture/soluble')}>
            <Badge>Más Popular</Badge>
            <IconWrapper>
              <Zap />
            </IconWrapper>
            <ProductTitle>Café Soluble Premium</ProductTitle>
            <ProductDescription>
              Para quienes buscan conveniencia sin sacrificar el sabor. 
              Listo en segundos, perfecto para tu ritmo de vida.
            </ProductDescription>
            <Features>
              <Feature>
                <Check />
                <span>Preparación instantánea</span>
              </Feature>
              <Feature>
                <Check />
                <span>3 sabores disponibles</span>
              </Feature>
              <Feature>
                <Check />
                <span>Ideal para oficina y viajes</span>
              </Feature>
              <Feature>
                <Check />
                <span>Envío gratis en primera compra</span>
              </Feature>
            </Features>
            <CTAButton>
              Quiero Café Rápido
              <ArrowRight />
            </CTAButton>
          </ProductOption>
          
          <ProductOption onClick={() => navigate('/lead-capture/grano')}>
            <Badge>Experiencia Premium</Badge>
            <IconWrapper>
              <Coffee />
            </IconWrapper>
            <ProductTitle>Café en Grano Artesanal</ProductTitle>
            <ProductDescription>
              Para los verdaderos amantes del café. Personaliza cada detalle 
              de tu experiencia cafetera.
            </ProductDescription>
            <Features>
              <Feature>
                <Check />
                <span>7 perfiles de sabor únicos</span>
              </Feature>
              <Feature>
                <Check />
                <span>Molienda personalizada</span>
              </Feature>
              <Feature>
                <Check />
                <span>Tostado fresco semanal</span>
              </Feature>
              <Feature>
                <Check />
                <span>Asesoría de barista incluida</span>
              </Feature>
            </Features>
            <CTAButton>
              Personalizar Mi Café
              <ArrowRight />
            </CTAButton>
          </ProductOption>
        </SelectionGrid>
      </Content>
    </Container>
  )
}

export default SelectionPage