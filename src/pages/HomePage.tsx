import React from 'react'
import styled from 'styled-components'
import { Hero } from '../components/Hero/Hero'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { theme } from '../styles/theme'
import { Product } from '../types'
import { useCart } from '../context/CartContext'
import { Code, Zap, Shield, Sparkles } from 'lucide-react'

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
    name: 'Módulo de Inventario Básico (ERP)',
    description: 'Gestión completa de productos, entradas y salidas de inventario',
    price: 199.00,
    category: 'erp',
    origin: 'MayaCode Guatemala',
    intensity: 'profesional',
    flavorNotes: ['Control de Stock', 'Alertas', 'Reportes'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
    stock: 100,
    isNew: true,
    discount: 20
  },
  {
    id: '2',
    name: 'Formulario Web con Validación',
    description: 'Snippet listo para copiar y pegar con validación completa',
    price: 99.00,
    category: 'web',
    origin: 'MayaCode Guatemala',
    intensity: 'básico',
    flavorNotes: ['Anti-spam', 'Validación', 'Personalizable'],
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400',
    stock: 200,
    isBestSeller: true
  },
  {
    id: '3',
    name: 'App de Pedidos Lite',
    description: 'Aplicación móvil para restaurantes y delivery',
    price: 499.00,
    category: 'mobile',
    origin: 'MayaCode Guatemala',
    intensity: 'avanzado',
    flavorNotes: ['Menú Digital', 'Carrito', 'PDF'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
    stock: 50,
    isNew: true
  }
]

const HomePage: React.FC = () => {
  const { addToCart } = useCart()

  return (
    <>
      <Hero />

      <Section>
        <Container>
          <SectionTitle>Productos Digitales Destacados</SectionTitle>
          <SectionSubtitle>
            Soluciones tecnológicas listas para usar, accesibles y adaptadas para PyMEs guatemaltecas
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
              <Code />
              <h3>Código Limpio y Documentado</h3>
              <p>
                Productos desarrollados con las mejores prácticas,
                documentación completa en español.
              </p>
            </Feature>

            <Feature>
              <Zap />
              <h3>Instalación Inmediata</h3>
              <p>
                Descarga instantánea de tu producto.
                Listo para implementar en menos de 1 hora.
              </p>
            </Feature>

            <Feature>
              <Shield />
              <h3>Soporte Local Garantizado</h3>
              <p>
                Soporte técnico en español incluido.
                Actualizaciones gratuitas por 6 meses.
              </p>
            </Feature>

            <Feature>
              <Sparkles />
              <h3>Innovación Continua</h3>
              <p>
                Productos actualizados constantemente
                con las últimas tecnologías del mercado.
              </p>
            </Feature>
          </Features>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTATitle>Transforma tu Negocio con MayaCode</CTATitle>
          <CTAText>
            Únete a cientos de PyMEs que ya digitalizaron sus procesos.
            Obtén 25% de descuento en tu primera compra.
          </CTAText>
          <CTAButton>Ver Catálogo Completo</CTAButton>
        </Container>
      </CTASection>
    </>
  )
}

export default HomePage