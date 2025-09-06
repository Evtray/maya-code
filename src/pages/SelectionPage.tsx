import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Database, Code, Smartphone, ArrowRight, Check } from 'lucide-react'
import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
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
    color: ${theme.colors.tech.accent};
    font-size: 3rem;
    margin-bottom: ${theme.spacing.md};
    font-family: ${theme.fonts.heading};
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }
  
  p {
    color: ${theme.colors.tech.accent};
    font-size: 1.3rem;
    opacity: 0.9;
  }
`

const SelectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};
  max-width: 1400px;
  margin: 0 auto;
  
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
  background: ${theme.colors.tech.accent};
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
    background: ${theme.colors.tech.dark};
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
  color: ${theme.colors.tech.dark};
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
    color: ${theme.colors.tech.accent};
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
          <span>🚀 Oferta de Lanzamiento - 25% OFF en tu Primera Compra</span>
        </FromSocial>
        
        <Header>
          <h1>Bienvenido a MayaCode Digital</h1>
          <p>Selecciona la solución tecnológica perfecta para tu negocio</p>
        </Header>
        
        <SelectionGrid>
          <ProductOption onClick={() => navigate('/lead-capture/erp')}>
            <Badge>Más Vendido</Badge>
            <IconWrapper>
              <Database />
            </IconWrapper>
            <ProductTitle>Módulo de Inventario Básico</ProductTitle>
            <ProductDescription>
              Sistema ERP simplificado para gestionar tu inventario. 
              Ideal para pequeñas tiendas y talleres.
            </ProductDescription>
            <Features>
              <Feature>
                <Check />
                <span>Control de stock en tiempo real</span>
              </Feature>
              <Feature>
                <Check />
                <span>Alertas de bajo inventario</span>
              </Feature>
              <Feature>
                <Check />
                <span>Reportes automáticos</span>
              </Feature>
              <Feature>
                <Check />
                <span>Instalación en menos de 1 hora</span>
              </Feature>
            </Features>
            <CTAButton>
              Obtener ERP por Q199
              <ArrowRight />
            </CTAButton>
          </ProductOption>
          
          <ProductOption onClick={() => navigate('/lead-capture/web')}>
            <Badge>Fácil de Usar</Badge>
            <IconWrapper>
              <Code />
            </IconWrapper>
            <ProductTitle>Formulario Web con Validación</ProductTitle>
            <ProductDescription>
              Snippet profesional listo para copiar y pegar. 
              Ahorra horas de desarrollo con código probado.
            </ProductDescription>
            <Features>
              <Feature>
                <Check />
                <span>Validación completa de campos</span>
              </Feature>
              <Feature>
                <Check />
                <span>Protección anti-spam incluida</span>
              </Feature>
              <Feature>
                <Check />
                <span>Fácilmente personalizable</span>
              </Feature>
              <Feature>
                <Check />
                <span>Compatible con cualquier sitio</span>
              </Feature>
            </Features>
            <CTAButton>
              Comprar por Q99
              <ArrowRight />
            </CTAButton>
          </ProductOption>

          <ProductOption onClick={() => navigate('/lead-capture/mobile')}>
            <Badge>Innovador</Badge>
            <IconWrapper>
              <Smartphone />
            </IconWrapper>
            <ProductTitle>App de Pedidos Lite</ProductTitle>
            <ProductDescription>
              Aplicación móvil para restaurantes y negocios. 
              Alternativa económica a las apps de delivery.
            </ProductDescription>
            <Features>
              <Feature>
                <Check />
                <span>Menú digital interactivo</span>
              </Feature>
              <Feature>
                <Check />
                <span>Carrito de compras integrado</span>
              </Feature>
              <Feature>
                <Check />
                <span>Funciona sin internet constante</span>
              </Feature>
              <Feature>
                <Check />
                <span>Personalizable con tu marca</span>
              </Feature>
            </Features>
            <CTAButton>
              Adquirir App por Q499
              <ArrowRight />
            </CTAButton>
          </ProductOption>
        </SelectionGrid>
      </Content>
    </Container>
  )
}

export default SelectionPage