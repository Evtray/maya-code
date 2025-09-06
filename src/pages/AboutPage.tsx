import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { Code, Users, Target, Award, Zap, Shield } from 'lucide-react'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const Hero = styled.section`
  text-align: center;
  padding: ${theme.spacing.xxl} 0;
  margin-bottom: ${theme.spacing.xxl};
  
  h1 {
    font-size: 3rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.lg};
    font-family: ${theme.fonts.heading};
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.3rem;
    color: ${theme.colors.text.secondary};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }
`

const Section = styled.section`
  margin-bottom: ${theme.spacing.xxl};
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xxl};
`

const Card = styled.div`
  background: white;
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
  
  svg {
    width: 48px;
    height: 48px;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
  }
  
  h3 {
    font-size: 1.3rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.sm};
  }
  
  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`

const Story = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  color: white;
  padding: ${theme.spacing.xxl};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.xxl};
  
  h2 {
    font-size: 2rem;
    margin-bottom: ${theme.spacing.lg};
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: ${theme.spacing.md};
    opacity: 0.95;
  }
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.xl};
  text-align: center;
  margin: ${theme.spacing.xxl} 0;
  
  .stat {
    h3 {
      font-size: 2.5rem;
      color: ${theme.colors.primary};
      margin-bottom: ${theme.spacing.xs};
    }
    
    p {
      color: ${theme.colors.text.secondary};
      font-size: 1.1rem;
    }
  }
`

const Team = styled.div`
  text-align: center;
  background: ${theme.colors.tech.accent};
  padding: ${theme.spacing.xxl};
  border-radius: ${theme.borderRadius.lg};
  
  h2 {
    font-size: 2rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.lg};
  }
  
  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
  }
`

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Hero>
        <h1>Sobre MayaCode Digital</h1>
        <p>
          Democratizando el acceso a la tecnología para PyMEs guatemaltecas 
          con soluciones digitales accesibles, funcionales y listas para usar.
        </p>
      </Hero>

      <Section>
        <SectionTitle>Nuestra Misión</SectionTitle>
        <Grid>
          <Card>
            <Target />
            <h3>Democratizar la Tecnología</h3>
            <p>
              Hacer que las soluciones digitales profesionales sean accesibles 
              para todas las empresas, sin importar su tamaño o presupuesto.
            </p>
          </Card>
          
          <Card>
            <Users />
            <h3>Apoyo Local</h3>
            <p>
              Brindar soporte técnico en español y soluciones adaptadas 
              específicamente al contexto empresarial guatemalteco.
            </p>
          </Card>
          
          <Card>
            <Code />
            <h3>Calidad Garantizada</h3>
            <p>
              Ofrecer productos digitales probados, documentados y listos 
              para implementar en menos de una hora.
            </p>
          </Card>
        </Grid>
      </Section>

      <Story>
        <h2>Nuestra Historia</h2>
        <p>
          MayaCode nació en 2020 con una visión clara: cerrar la brecha digital 
          que existe entre las grandes corporaciones y las pequeñas empresas guatemaltecas.
        </p>
        <p>
          Después de años desarrollando soluciones personalizadas costosas, 
          nos dimos cuenta de que muchas PyMEs necesitaban las mismas funcionalidades 
          básicas pero no podían pagar desarrollos a medida.
        </p>
        <p>
          Así nació nuestra plataforma de productos digitales preconstruidos: 
          soluciones profesionales a precios accesibles, con la calidad que 
          caracteriza todo nuestro trabajo.
        </p>
      </Story>

      <Stats>
        <div className="stat">
          <h3>500+</h3>
          <p>Productos Vendidos</p>
        </div>
        <div className="stat">
          <h3>200+</h3>
          <p>PyMEs Digitalizadas</p>
        </div>
        <div className="stat">
          <h3>98%</h3>
          <p>Satisfacción del Cliente</p>
        </div>
        <div className="stat">
          <h3>24/7</h3>
          <p>Soporte Técnico</p>
        </div>
      </Stats>

      <Section>
        <SectionTitle>¿Por qué MayaCode?</SectionTitle>
        <Grid>
          <Card>
            <Zap />
            <h3>Implementación Rápida</h3>
            <p>
              Nuestros productos están diseñados para funcionar inmediatamente. 
              Descarga, instala y empieza a usar en menos de 1 hora.
            </p>
          </Card>
          
          <Card>
            <Shield />
            <h3>Garantía de Satisfacción</h3>
            <p>
              Si no quedas satisfecho con tu compra, te devolvemos tu dinero 
              en los primeros 7 días sin preguntas.
            </p>
          </Card>
          
          <Card>
            <Award />
            <h3>Innovación Constante</h3>
            <p>
              Actualizamos constantemente nuestros productos con las últimas 
              tecnologías y mejores prácticas del mercado.
            </p>
          </Card>
        </Grid>
      </Section>

      <Team>
        <h2>El Equipo MayaCode</h2>
        <p>
          Somos un equipo de desarrolladores, diseñadores y consultores 
          guatemaltecos apasionados por la tecnología y comprometidos con 
          el desarrollo digital de nuestro país.
        </p>
        <p style={{ marginTop: theme.spacing.lg }}>
          Cada producto que ofrecemos ha sido desarrollado y probado por 
          nuestro equipo, garantizando la máxima calidad y funcionalidad.
        </p>
      </Team>
    </Container>
  )
}

export default AboutPage