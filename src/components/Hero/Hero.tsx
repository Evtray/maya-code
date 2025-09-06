import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Code, ArrowRight, Zap, Rocket, Shield } from 'lucide-react'
import { theme } from '../../styles/theme'

const HeroContainer = styled.section`
  min-height: 80vh;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 60%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.3;
    transform: rotate(45deg);
  }
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxl};
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const HeroText = styled.div`
  h1 {
    color: white;
    font-size: 3rem;
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.2;

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 2rem;
    }

    span {
      color: ${theme.colors.accent};
    }
  }

  p {
    color: white;
    font-size: 1.2rem;
    margin-bottom: ${theme.spacing.xl};
    opacity: 0.9;
  }
`

const CTAButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.tablet}) {
    justify-content: center;
  }
`

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: white;
  color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.accent};
    color: white;
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background: white;
    color: ${theme.colors.primary};
  }
`

const HeroImage = styled.div`
  position: relative;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`

const ProductCards = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`

const ProductCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  transform: translateX(0);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  &:nth-child(2) {
    margin-left: ${theme.spacing.xl};
  }
`

const ProductIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${theme.colors.tech.accent};
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};

  svg {
    width: 30px;
    height: 30px;
  }
`

const ProductInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 1.2rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.xs};
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: 0.9rem;
    margin: 0;
  }
`

const Features = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
  }
`

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: white;

  svg {
    width: 24px;
    height: 24px;
    color: ${theme.colors.accent};
  }
`

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <h1>
            Transforma tu Negocio
            <br />
            <span>Soluciones Digitales para PyMEs</span>
          </h1>
          <p>
            Productos tecnológicos listos para usar, accesibles y adaptados 
            al mercado guatemalteco. Digitaliza tu empresa en menos de 1 hora 
            con soporte local garantizado.
          </p>

          <CTAButtons>
            <PrimaryButton to="/seleccion">
              <Zap />
              Comenzar Mi Experiencia
            </PrimaryButton>
            <SecondaryButton to="/productos">
              <Code />
              Ver Catálogo Completo
            </SecondaryButton>
          </CTAButtons>

          <Features>
            <Feature>
              <Rocket />
              <span>Instalación Rápida</span>
            </Feature>
            <Feature>
              <Shield />
              <span>Soporte en Español</span>
            </Feature>
            <Feature>
              <ArrowRight />
              <span>Garantía 7 Días</span>
            </Feature>
          </Features>
        </HeroText>

        <HeroImage>
          <ProductCards>
            <ProductCard>
              <ProductIcon>
                <Zap />
              </ProductIcon>
              <ProductInfo>
                <h3>Módulo ERP Básico</h3>
                <p>Control de inventario profesional</p>
              </ProductInfo>
            </ProductCard>

            <ProductCard>
              <ProductIcon>
                <Code />
              </ProductIcon>
              <ProductInfo>
                <h3>Desarrollo Web</h3>
                <p>Snippets y plantillas listas</p>
              </ProductInfo>
            </ProductCard>
          </ProductCards>
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  )
}