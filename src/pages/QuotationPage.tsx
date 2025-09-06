import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FileText, Building, Phone, Mail, Package, Calculator, Send, Check } from 'lucide-react'
import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background};
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  
  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.md};
    
    svg {
      width: 40px;
      height: 40px;
      color: ${theme.colors.primary};
    }
  }
  
  p {
    font-size: 1.2rem;
    color: ${theme.colors.text.secondary};
  }
`

const QuotationCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
  overflow: hidden;
`

const QuotationHeader = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.tech.dark} 100%);
  padding: ${theme.spacing.xl};
  color: white;
  
  .quote-number {
    font-size: 0.9rem;
    opacity: 0.9;
    margin-bottom: ${theme.spacing.sm};
  }
  
  .company-info {
    display: flex;
    justify-content: space-between;
    align-items: start;
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      gap: ${theme.spacing.md};
    }
    
    .left {
      h2 {
        font-size: 1.8rem;
        margin-bottom: ${theme.spacing.xs};
      }
      
      p {
        opacity: 0.95;
      }
    }
    
    .right {
      text-align: right;
      
      @media (max-width: ${theme.breakpoints.tablet}) {
        text-align: left;
      }
      
      p {
        margin-bottom: ${theme.spacing.xs};
        display: flex;
        align-items: center;
        gap: ${theme.spacing.sm};
        justify-content: flex-end;
        
        @media (max-width: ${theme.breakpoints.tablet}) {
          justify-content: flex-start;
        }
        
        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
`

const QuotationBody = styled.div`
  padding: ${theme.spacing.xl};
`

const ClientInfo = styled.div`
  background: ${theme.colors.tech.accent};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${theme.spacing.md};
    
    p {
      margin: 0;
      color: ${theme.colors.text.secondary};
      
      strong {
        color: ${theme.colors.text.primary};
        display: block;
        margin-bottom: ${theme.spacing.xs};
      }
    }
  }
`

const ProductsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: ${theme.spacing.xl};
  
  thead {
    background: ${theme.colors.tech.accent};
    
    th {
      padding: ${theme.spacing.md};
      text-align: left;
      color: ${theme.colors.primary};
      font-weight: 600;
      border-bottom: 2px solid ${theme.colors.tech.light};
    }
  }
  
  tbody {
    tr {
      border-bottom: 1px solid ${theme.colors.tech.accent};
      
      &:hover {
        background: ${theme.colors.background};
      }
    }
    
    td {
      padding: ${theme.spacing.md};
      color: ${theme.colors.text.secondary};
      
      &.product-name {
        color: ${theme.colors.text.primary};
        font-weight: 500;
      }
      
      &.price {
        font-weight: bold;
        color: ${theme.colors.primary};
      }
    }
  }
  
  tfoot {
    tr {
      &.subtotal {
        td {
          padding: ${theme.spacing.md};
          border-top: 2px solid ${theme.colors.tech.light};
          font-weight: 600;
        }
      }
      
      &.discount {
        td {
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          color: ${theme.colors.success};
        }
      }
      
      &.total {
        td {
          padding: ${theme.spacing.md};
          font-size: 1.3rem;
          font-weight: bold;
          color: ${theme.colors.primary};
          border-top: 2px solid ${theme.colors.primary};
        }
      }
    }
  }
`

const Benefits = styled.div`
  background: ${theme.colors.tech.accent};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
  }
  
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing.md};
    
    .benefit {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.sm};
      
      svg {
        width: 20px;
        height: 20px;
        color: ${theme.colors.success};
      }
      
      span {
        color: ${theme.colors.text.secondary};
      }
    }
  }
`

const Terms = styled.div`
  margin-bottom: ${theme.spacing.xl};
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
  }
  
  ul {
    list-style: none;
    
    li {
      display: flex;
      align-items: flex-start;
      gap: ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.sm};
      color: ${theme.colors.text.secondary};
      font-size: 0.9rem;
      
      &::before {
        content: "•";
        color: ${theme.colors.primary};
        font-weight: bold;
      }
    }
  }
`

const Actions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

const ActionButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.md};
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.tech.dark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  &.secondary {
    background: white;
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

const QuotationPage: React.FC = () => {
  const [leadData, setLeadData] = useState<any>(null)
  const [quotationData] = useState({
    number: `COT-${Date.now().toString().slice(-6)}`,
    date: new Date().toLocaleDateString(),
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
  })

  useEffect(() => {
    const storedData = localStorage.getItem('leadData')
    if (storedData) {
      setLeadData(JSON.parse(storedData))
    }
  }, [])

  const products = leadData?.tipo === 'soluble' ? [
    { name: 'Café Soluble Premium - Clásico', quantity: '5 kg', unitPrice: 55, total: 275 },
    { name: 'Café Soluble Premium - Intenso', quantity: '5 kg', unitPrice: 60, total: 300 },
    { name: 'Café Soluble Premium - Suave', quantity: '5 kg', unitPrice: 55, total: 275 }
  ] : [
    { name: 'Café en Grano - Huehuetenango', quantity: '10 kg', unitPrice: 95, total: 950 },
    { name: 'Café en Grano - Antigua', quantity: '10 kg', unitPrice: 105, total: 1050 },
    { name: 'Café en Grano - Alta Verapaz', quantity: '5 kg', unitPrice: 90, total: 450 }
  ]

  const subtotal = products.reduce((sum, p) => sum + p.total, 0)
  const discount = subtotal * 0.25
  const total = subtotal - discount

  const handleAcceptQuote = () => {
    alert('Cotización aceptada. Un ejecutivo se pondrá en contacto contigo en las próximas 24 horas.')
    localStorage.setItem('quotationAccepted', JSON.stringify({
      ...quotationData,
      leadData,
      total,
      acceptedAt: new Date().toISOString()
    }))
  }

  const handleRequestChanges = () => {
    alert('Por favor contacta a nuestro equipo de ventas al +502 5555-0123 o ventas@mayacode.gt')
  }

  if (!leadData) {
    return (
      <Container>
        <Content>
          <Header>
            <h1>Cargando cotización...</h1>
          </Header>
        </Content>
      </Container>
    )
  }

  return (
    <Container>
      <Content>
        <Header>
          <h1>
            <FileText />
            Cotización Mayorista
          </h1>
          <p>Precios especiales para pedidos al por mayor</p>
        </Header>

        <QuotationCard>
          <QuotationHeader>
            <div className="quote-number">
              Cotización No. {quotationData.number} | Fecha: {quotationData.date}
            </div>
            <div className="company-info">
              <div className="left">
                <h2>MayaCode</h2>
                <p>Café Artesanal Guatemalteco</p>
              </div>
              <div className="right">
                <p>
                  <Phone /> +502 5555-0123
                </p>
                <p>
                  <Mail /> ventas@mayacode.gt
                </p>
                <p>
                  <Building /> Antigua Guatemala
                </p>
              </div>
            </div>
          </QuotationHeader>

          <QuotationBody>
            <ClientInfo>
              <h3>
                <Building />
                Información del Cliente
              </h3>
              <div className="info-grid">
                <p>
                  <strong>Empresa/Nombre</strong>
                  {leadData.nombre}
                </p>
                <p>
                  <strong>Email</strong>
                  {leadData.correo}
                </p>
                <p>
                  <strong>Dirección</strong>
                  {leadData.direccion}
                </p>
                <p>
                  <strong>Tipo de Cliente</strong>
                  Mayorista
                </p>
              </div>
            </ClientInfo>

            <h3 style={{ marginBottom: theme.spacing.md }}>
              <Package style={{ display: 'inline', marginRight: theme.spacing.sm }} />
              Productos Cotizados
            </h3>

            <ProductsTable>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unit.</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="product-name">{product.name}</td>
                    <td>{product.quantity}</td>
                    <td className="price">Q{product.unitPrice}/kg</td>
                    <td className="price">Q{product.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="subtotal">
                  <td colSpan={3} style={{ textAlign: 'right' }}>Subtotal:</td>
                  <td className="price">Q{subtotal}</td>
                </tr>
                <tr className="discount">
                  <td colSpan={3} style={{ textAlign: 'right' }}>Descuento Mayorista (25%):</td>
                  <td>-Q{discount}</td>
                </tr>
                <tr className="total">
                  <td colSpan={3} style={{ textAlign: 'right' }}>TOTAL:</td>
                  <td>Q{total}</td>
                </tr>
              </tfoot>
            </ProductsTable>

            <Benefits>
              <h3>Beneficios Incluidos</h3>
              <div className="benefits-grid">
                <div className="benefit">
                  <Check />
                  <span>Envío gratis a nivel nacional</span>
                </div>
                <div className="benefit">
                  <Check />
                  <span>Crédito 30 días (sujeto a aprobación)</span>
                </div>
                <div className="benefit">
                  <Check />
                  <span>Capacitación de barista para tu equipo</span>
                </div>
                <div className="benefit">
                  <Check />
                  <span>Muestras gratis de nuevos productos</span>
                </div>
                <div className="benefit">
                  <Check />
                  <span>Material promocional personalizado</span>
                </div>
                <div className="benefit">
                  <Check />
                  <span>Soporte técnico especializado</span>
                </div>
              </div>
            </Benefits>

            <Terms>
              <h3>Términos y Condiciones</h3>
              <ul>
                <li>Esta cotización es válida hasta el {quotationData.validUntil}</li>
                <li>Precios expresados en Quetzales guatemaltecos</li>
                <li>Tiempo de entrega: 3-5 días hábiles después de confirmada la orden</li>
                <li>Forma de pago: 50% anticipo, 50% contra entrega (primera compra)</li>
                <li>Pedido mínimo: 5kg para café soluble, 10kg para café en grano</li>
                <li>Los precios pueden variar según la temporada y disponibilidad</li>
              </ul>
            </Terms>

            <Actions>
              <ActionButton onClick={handleAcceptQuote}>
                <Check />
                Aceptar Cotización
              </ActionButton>
              <ActionButton className="secondary" onClick={handleRequestChanges}>
                <Calculator />
                Solicitar Cambios
              </ActionButton>
              <ActionButton className="secondary">
                <Send />
                Reenviar por Email
              </ActionButton>
            </Actions>
          </QuotationBody>
        </QuotationCard>
      </Content>
    </Container>
  )
}

export default QuotationPage