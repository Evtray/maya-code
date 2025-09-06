import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { CheckCircle, Mail, Gift, ArrowRight, Calendar, Percent, Users, FileText } from 'lucide-react'
import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.tech.accent} 0%, ${theme.colors.background} 100%);
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const SuccessCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
  padding: ${theme.spacing.xxl};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, ${theme.colors.success} 0%, ${theme.colors.secondary} 100%);
  }
`

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${theme.colors.success};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.lg};
  
  svg {
    width: 48px;
    height: 48px;
    color: white;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xl};
`

const EmailPreview = styled.div`
  background: ${theme.colors.background};
  border: 2px solid ${theme.colors.tech.accent};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin: ${theme.spacing.xl} 0;
  text-align: left;
  
  h3 {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  .email-header {
    background: white;
    padding: ${theme.spacing.md};
    border-radius: ${theme.borderRadius.sm};
    margin-bottom: ${theme.spacing.md};
    
    p {
      margin: ${theme.spacing.xs} 0;
      color: ${theme.colors.text.secondary};
      
      strong {
        color: ${theme.colors.text.primary};
      }
    }
  }
  
  .email-body {
    background: white;
    padding: ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.sm};
    
    p {
      margin-bottom: ${theme.spacing.md};
      line-height: 1.6;
    }
    
    .discount-code {
      background: ${theme.colors.secondary};
      color: ${theme.colors.tech.dark};
      padding: ${theme.spacing.md};
      border-radius: ${theme.borderRadius.md};
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      margin: ${theme.spacing.lg} 0;
    }
  }
`

const OffersSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`

const OfferCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.primary};
  }
  
  &.recommended {
    border-color: ${theme.colors.secondary};
    position: relative;
    
    &::before {
      content: 'RECOMENDADO';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: ${theme.colors.secondary};
      color: ${theme.colors.tech.dark};
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      border-radius: ${theme.borderRadius.full};
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
  
  .icon {
    width: 60px;
    height: 60px;
    background: ${theme.colors.tech.accent};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing.md};
    
    svg {
      width: 32px;
      height: 32px;
      color: ${theme.colors.primary};
    }
  }
  
  h3 {
    font-size: 1.3rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.sm};
  }
  
  .price {
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.colors.primary};
    margin: ${theme.spacing.sm} 0;
    
    small {
      font-size: 0.9rem;
      color: ${theme.colors.text.secondary};
    }
  }
  
  .savings {
    background: ${theme.colors.success};
    color: white;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.sm};
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: ${theme.spacing.md};
  }
  
  ul {
    list-style: none;
    text-align: left;
    margin: ${theme.spacing.md} 0;
    
    li {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xs};
      margin-bottom: ${theme.spacing.xs};
      color: ${theme.colors.text.secondary};
      font-size: 0.9rem;
      
      &::before {
        content: "✓";
        color: ${theme.colors.success};
        font-weight: bold;
      }
    }
  }
`

const CTAButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.md};
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  
  &:hover {
    background: ${theme.colors.tech.dark};
    gap: ${theme.spacing.md};
  }
  
  &.secondary {
    background: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    
    &:hover {
      background: ${theme.colors.primary};
      color: white;
    }
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const CustomerData = styled.div`
  background: ${theme.colors.tech.accent};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
  }
  
  .data-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${theme.spacing.md};
    
    .data-item {
      p {
        margin: 0;
        color: ${theme.colors.text.secondary};
        font-size: 0.9rem;
        
        strong {
          color: ${theme.colors.text.primary};
          display: block;
        }
      }
    }
  }
`

const LeadConfirmation: React.FC = () => {
  const navigate = useNavigate()
  const [leadData, setLeadData] = useState<any>(null)
  const [selectedOffer, setSelectedOffer] = useState<string>('')

  useEffect(() => {
    // Recuperar datos del lead desde localStorage
    const storedData = localStorage.getItem('leadData')
    if (storedData) {
      setLeadData(JSON.parse(storedData))
    }
  }, [])

  const handleOfferSelection = (offerType: string) => {
    setSelectedOffer(offerType)
    
    // Simular guardado de conversión
    const conversionData = {
      ...leadData,
      offerSelected: offerType,
      conversionDate: new Date().toISOString()
    }
    localStorage.setItem('conversionData', JSON.stringify(conversionData))
    
    if (offerType === 'quotation') {
      navigate('/cotizacion')
    } else {
      navigate('/checkout')
    }
  }

  if (!leadData) {
    return (
      <Container>
        <Content>
          <SuccessCard>
            <Title>Cargando...</Title>
          </SuccessCard>
        </Content>
      </Container>
    )
  }

  const isSoluble = leadData.tipo === 'soluble'

  return (
    <Container>
      <Content>
        <SuccessCard>
          <SuccessIcon>
            <CheckCircle />
          </SuccessIcon>
          <Title>¡Excelente {leadData.nombre}!</Title>
          <Subtitle>
            Tu solicitud ha sido recibida exitosamente. 
            Hemos enviado un correo de confirmación a {leadData.correo}
          </Subtitle>
        </SuccessCard>

        <EmailPreview>
          <h3>
            <Mail />
            Email Automático Enviado
          </h3>
          <div className="email-header">
            <p><strong>De:</strong> hola@mayacode.gt</p>
            <p><strong>Para:</strong> {leadData.correo}</p>
            <p><strong>Asunto:</strong> ¡Bienvenido a MayaCode! Tu código de descuento exclusivo</p>
          </div>
          <div className="email-body">
            <p>Hola {leadData.nombre},</p>
            <p>
              ¡Gracias por tu interés en nuestro {isSoluble ? 'Café Soluble Premium' : 'Café en Grano Artesanal'}!
              Como agradecimiento, te obsequiamos un código de descuento exclusivo:
            </p>
            <div className="discount-code">
              {isSoluble ? 'SOLUBLE20' : 'GRANO25'}
            </div>
            <p>
              <strong>Resumen de tu selección:</strong><br/>
              {isSoluble ? (
                <>
                  • Sabor: {leadData.sabor}<br/>
                  • Cantidad: {leadData.cantidad}<br/>
                </>
              ) : (
                <>
                  • Perfil de sabor: {leadData.perfilSabor?.join(', ')}<br/>
                  • Molienda: {leadData.molienda}<br/>
                  • Cantidad: {leadData.cantidad}<br/>
                </>
              )}
              • Dirección de entrega: {leadData.direccion}
            </p>
            <p>
              Tu código es válido por 30 días y te da un {isSoluble ? '20%' : '25%'} de descuento 
              en tu primera compra.
            </p>
            <p>
              Saludos cordiales,<br/>
              El equipo de MayaCode
            </p>
          </div>
        </EmailPreview>

        <h2 style={{ textAlign: 'center', marginBottom: theme.spacing.md }}>
          <Gift style={{ display: 'inline', marginRight: theme.spacing.sm }} />
          Ofertas Especiales para Ti
        </h2>

        <OffersSection>
          <OfferCard onClick={() => handleOfferSelection('single')}>
            <div className="icon">
              <Gift />
            </div>
            <h3>Compra Única</h3>
            <div className="price">
              {isSoluble ? 'Q68' : 'Q94'}
              <small>/unidad</small>
            </div>
            <div className="savings">20% OFF Primera Compra</div>
            <ul>
              <li>Envío gratis incluido</li>
              <li>Muestra gratis de regalo</li>
              <li>Sin compromisos</li>
            </ul>
            <CTAButton>
              Comprar Ahora
              <ArrowRight />
            </CTAButton>
          </OfferCard>

          <OfferCard className="recommended" onClick={() => handleOfferSelection('subscription')}>
            <div className="icon">
              <Calendar />
            </div>
            <h3>Suscripción Mensual</h3>
            <div className="price">
              {isSoluble ? 'Q58' : 'Q79'}
              <small>/mes</small>
            </div>
            <div className="savings">35% AHORRO</div>
            <ul>
              <li>15% descuento adicional</li>
              <li>Envío siempre gratis</li>
              <li>Cancela cuando quieras</li>
              <li>Productos exclusivos</li>
              <li>Asesoría de barista</li>
            </ul>
            <CTAButton>
              Suscribirme
              <ArrowRight />
            </CTAButton>
          </OfferCard>

          <OfferCard onClick={() => handleOfferSelection('quotation')}>
            <div className="icon">
              <FileText />
            </div>
            <h3>Mayoreo</h3>
            <div className="price">
              Cotización
              <small>personalizada</small>
            </div>
            <div className="savings">Mejor Precio</div>
            <ul>
              <li>Pedidos desde 5kg</li>
              <li>Precio especial</li>
              <li>Facturación</li>
              <li>Crédito 30 días</li>
            </ul>
            <CTAButton className="secondary">
              Solicitar Cotización
              <ArrowRight />
            </CTAButton>
          </OfferCard>
        </OffersSection>

        <CustomerData>
          <h3>Datos Capturados (Lead ID: {Date.now()})</h3>
          <div className="data-grid">
            <div className="data-item">
              <p><strong>Tipo de Producto</strong>{isSoluble ? 'Café Soluble' : 'Café en Grano'}</p>
            </div>
            <div className="data-item">
              <p><strong>Fecha de Captura</strong>{new Date(leadData.fecha).toLocaleString()}</p>
            </div>
            <div className="data-item">
              <p><strong>Origen</strong>Redes Sociales</p>
            </div>
            <div className="data-item">
              <p><strong>Estado</strong>Lead Calificado</p>
            </div>
          </div>
        </CustomerData>

        <OfferCard style={{ marginTop: theme.spacing.xl }} onClick={() => handleOfferSelection('referral')}>
          <div className="icon">
            <Users />
          </div>
          <h3>Programa de Referidos</h3>
          <Subtitle>
            Invita a 3 amigos y obtén 1 mes GRATIS de suscripción
          </Subtitle>
          <CTAButton className="secondary">
            <Percent />
            Conocer Más
          </CTAButton>
        </OfferCard>
      </Content>
    </Container>
  )
}

export default LeadConfirmation