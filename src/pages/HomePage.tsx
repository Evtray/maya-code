import React from 'react'
import styled from 'styled-components'
import { Hero } from '../components/Hero/Hero'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { theme } from '../styles/theme'
import { Product } from '../types'
import { useCart } from '../context/CartContext'
import { Coffee, Truck, Shield, Award } from 'lucide-react'

const Section = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.background};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${theme.colors.text.secondary};
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.xxl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xxl};
`

const Features = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xxl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
`

const Feature = styled.div`
  text-align: center;

  svg {
    width: 48px;
    height: 48px;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
  }

  h3 {
    font-size: 1.2rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`

const CTASection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  padding: ${theme.spacing.xxl} 0;
  text-align: center;
  color: white;
`

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.md};
`

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.xl};
  opacity: 0.95;
`

const CTAButton = styled.button`
  background: white;
  color: ${theme.colors.primary};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Café Soluble Premium Antigua',
    description: 'Sabor intenso y aroma inconfundible',
    price: 85.00,
    category: 'soluble',
    origin: 'Antigua Guatemala',
    intensity: 'fuerte',
    flavorNotes: ['Chocolate', 'Caramelo', 'Nuez'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    stock: 50,
    isNew: true,
    discount: 15
  },
  {
    id: '2',
    name: 'Café en Grano Huehuetenango',
    description: 'Notas frutales y acidez balanceada',
    price: 125.00,
    category: 'grano',
    origin: 'Huehuetenango',
    intensity: 'medio',
    flavorNotes: ['Frutas rojas', 'Miel', 'Cítricos'],
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    stock: 30,
    isBestSeller: true,
    roastDate: '2024-01-15',
    altitude: 1800,
    process: 'lavado',
    farmer: 'Don Carlos Mendez'
  },
  {
    id: '3',
    name: 'Café Soluble Descafeinado',
    description: 'Todo el sabor sin cafeína',
    price: 75.00,
    category: 'soluble',
    origin: 'Cobán',
    intensity: 'suave',
    flavorNotes: ['Vainilla', 'Almendra', 'Miel'],
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400',
    stock: 45
  },
  {
    id: '4',
    name: 'Café en Grano Edición Especial',
    description: 'Reserva limitada de altura',
    price: 165.00,
    category: 'grano',
    origin: 'Alta Verapaz',
    intensity: 'fuerte',
    flavorNotes: ['Chocolate negro', 'Especias', 'Tabaco'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    stock: 20,
    isNew: true,
    roastDate: '2024-01-20',
    altitude: 2000,
    process: 'honey',
    farm: 'Finca La Esperanza'
  }
]

const HomePage: React.FC = () => {
  const { addToCart } = useCart()

  return (
    <>
      <Hero />

      <Section>
        <Container>
          <SectionTitle>Productos Destacados</SectionTitle>
          <SectionSubtitle>
            Descubre nuestra selección de cafés guatemaltecos de la más alta calidad
          </SectionSubtitle>

          <ProductGrid>
            {mockProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </ProductGrid>

          <Features>
            <Feature>
              <Coffee />
              <h3>100% Guatemalteco</h3>
              <p>
                Café cultivado en las mejores fincas de Guatemala, 
                con tradición y pasión por la calidad.
              </p>
            </Feature>

            <Feature>
              <Truck />
              <h3>Envío Gratis</h3>
              <p>
                Envío gratuito en pedidos mayores a Q200. 
                Entrega en 24-48 horas en ciudad capital.
              </p>
            </Feature>

            <Feature>
              <Shield />
              <h3>Garantía de Calidad</h3>
              <p>
                Si no quedas satisfecho con tu compra, 
                te devolvemos tu dinero sin preguntas.
              </p>
            </Feature>

            <Feature>
              <Award />
              <h3>Premiado</h3>
              <p>
                Ganadores de múltiples premios nacionales 
                e internacionales por nuestra calidad.
              </p>
            </Feature>
          </Features>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTATitle>Únete al Club MayaCode</CTATitle>
          <CTAText>
            Suscríbete y recibe 15% de descuento en todas tus compras, 
            además de contenido exclusivo sobre el mundo del café
          </CTAText>
          <CTAButton>Suscribirme Ahora</CTAButton>
        </Container>
      </CTASection>
    </>
  )
}

export default HomePage