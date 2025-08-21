import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Coffee, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { theme } from '../../styles/theme'

const FooterContainer = styled.footer`
  background: ${theme.colors.coffee.dark};
  color: ${theme.colors.text.white};
  padding: ${theme.spacing.xxl} 0 ${theme.spacing.lg};
  margin-top: auto;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const FooterSection = styled.div`
  h3 {
    color: ${theme.colors.secondary};
    font-size: 1.2rem;
    margin-bottom: ${theme.spacing.md};
  }

  a {
    color: ${theme.colors.coffee.cream};
    display: block;
    margin-bottom: ${theme.spacing.sm};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`

const BrandSection = styled(FooterSection)`
  p {
    color: ${theme.colors.coffee.cream};
    line-height: 1.6;
    margin-bottom: ${theme.spacing.md};
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: 1.8rem;
  font-weight: bold;
  color: ${theme.colors.secondary};
  font-family: ${theme.fonts.heading};
  margin-bottom: ${theme.spacing.md};

  svg {
    width: 32px;
    height: 32px;
  }
`

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.coffee.cream};

  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.secondary};
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
`

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.coffee.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.coffee.cream};
  }

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`

const Newsletter = styled.form`
  margin-top: ${theme.spacing.md};
  display: flex;
  gap: ${theme.spacing.sm};

  input {
    flex: 1;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border: 1px solid ${theme.colors.coffee.medium};
    border-radius: ${theme.borderRadius.sm};
    background: ${theme.colors.coffee.dark};
    color: white;

    &::placeholder {
      color: ${theme.colors.coffee.light};
    }
  }

  button {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    background: ${theme.colors.secondary};
    color: ${theme.colors.coffee.dark};
    border-radius: ${theme.borderRadius.sm};
    font-weight: bold;

    &:hover {
      background: ${theme.colors.primary};
      color: white;
    }
  }
`

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.lg} ${theme.spacing.lg} 0;
  border-top: 1px solid ${theme.colors.coffee.medium};
  margin-top: ${theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  color: ${theme.colors.coffee.light};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`

const PaymentMethods = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;

  span {
    margin-right: ${theme.spacing.sm};
  }

  img {
    height: 30px;
  }
`

export const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription')
  }

  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <Logo>
            <Coffee />
            MayaCode
          </Logo>
          <p>
            Del grano a tu taza. Tradición cafetalera guatemalteca 
            llevada directamente a tu hogar con la mejor calidad y 
            el sabor auténtico que nos caracteriza.
          </p>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <Twitter />
            </SocialIcon>
          </SocialLinks>
        </BrandSection>

        <FooterSection>
          <h3>Enlaces Rápidos</h3>
          <Link to="/productos">Todos los Productos</Link>
          <Link to="/productos?category=soluble">Café Soluble</Link>
          <Link to="/productos?category=grano">Café en Grano</Link>
          <Link to="/suscripcion">Suscripciones</Link>
          <Link to="/nosotros">Sobre Nosotros</Link>
          <Link to="/blog">Blog del Café</Link>
        </FooterSection>

        <FooterSection>
          <h3>Atención al Cliente</h3>
          <Link to="/contacto">Contacto</Link>
          <Link to="/faqs">Preguntas Frecuentes</Link>
          <Link to="/envios">Información de Envío</Link>
          <Link to="/devoluciones">Política de Devoluciones</Link>
          <Link to="/terminos">Términos y Condiciones</Link>
          <Link to="/privacidad">Política de Privacidad</Link>
        </FooterSection>

        <FooterSection>
          <h3>Contacto</h3>
          <ContactInfo>
            <Phone />
            <span>+502 5555-0123</span>
          </ContactInfo>
          <ContactInfo>
            <Mail />
            <span>hola@mayacode.gt</span>
          </ContactInfo>
          <ContactInfo>
            <MapPin />
            <span>Antigua Guatemala, Sacatepéquez</span>
          </ContactInfo>
          
          <h3 style={{ marginTop: theme.spacing.lg }}>Newsletter</h3>
          <p style={{ color: theme.colors.coffee.cream, fontSize: '0.9rem' }}>
            Recibe ofertas exclusivas y contenido sobre café
          </p>
          <Newsletter onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="Tu email" required />
            <button type="submit">Suscribir</button>
          </Newsletter>
        </FooterSection>
      </FooterContent>

      <BottomBar>
        <div>
          © 2024 MayaCode. Todos los derechos reservados.
        </div>
        <PaymentMethods>
          <span>Métodos de pago:</span>
          <span>💳 Visa</span>
          <span>💳 Mastercard</span>
          <span>🏦 Transferencia</span>
        </PaymentMethods>
      </BottomBar>
    </FooterContainer>
  )
}