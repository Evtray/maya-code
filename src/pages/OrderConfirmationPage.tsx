import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { 
  CheckCircle, Download, Mail, ArrowRight, 
  Package, Calendar, CreditCard, Printer 
} from 'lucide-react'
import { theme } from '../styles/theme'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  text-align: center;
`

const SuccessIcon = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto ${theme.spacing.xl};
  background: ${theme.colors.success}20;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scaleIn 0.5s ease;
  
  @keyframes scaleIn {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  svg {
    width: 50px;
    height: 50px;
    color: ${theme.colors.success};
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xl};
`

const OrderDetails = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.sm};
  margin-bottom: ${theme.spacing.xl};
  text-align: left;
`

const OrderNumber = styled.div`
  background: ${theme.colors.tech.accent};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
  
  .label {
    font-size: 0.9rem;
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing.xs};
  }
  
  .number {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.colors.primary};
    font-family: monospace;
  }
`

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.sm} 0;
  border-bottom: 1px solid ${theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
  
  .label {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    color: ${theme.colors.text.secondary};
    
    svg {
      width: 20px;
      height: 20px;
      color: ${theme.colors.primary};
    }
  }
  
  .value {
    font-weight: 500;
    color: ${theme.colors.text.primary};
  }
`

const ProductList = styled.div`
  margin: ${theme.spacing.lg} 0;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.md};
`

const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing.sm} 0;
  
  .name {
    color: ${theme.colors.text.primary};
  }
  
  .details {
    color: ${theme.colors.text.secondary};
    font-size: 0.9rem;
  }
`

const TotalAmount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  text-align: right;
  margin-top: ${theme.spacing.md};
  padding-top: ${theme.spacing.md};
  border-top: 2px solid ${theme.colors.border};
`

const Actions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing.xl};
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: white;
  color: ${theme.colors.text.primary};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const ContinueButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.md};
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const NextSteps = styled.div`
  background: ${theme.colors.success}10;
  border-left: 4px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
  text-align: left;
  
  h3 {
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: ${theme.spacing.sm} 0;
      color: ${theme.colors.text.secondary};
      display: flex;
      align-items: flex-start;
      gap: ${theme.spacing.sm};
      
      &:before {
        content: "✓";
        color: ${theme.colors.success};
        font-weight: bold;
        margin-top: 2px;
      }
    }
  }
`

const OrderConfirmationPage: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { orderNumber, total, items } = location.state || {
    orderNumber: 'MCD-1234567890',
    total: 1299.99,
    items: []
  }
  
  useEffect(() => {
    // Si no hay datos de orden, redirigir al home
    if (!location.state) {
      // En producción real, esto sería una orden guardada en DB
      // navigate('/')
    }
  }, [location.state, navigate])
  
  const handlePrint = () => {
    window.print()
  }
  
  const handleDownloadInvoice = () => {
    // Simulamos descarga de factura
    alert('Descargando factura PDF...')
  }
  
  const handleSendEmail = () => {
    // Simulamos envío de email
    alert('Confirmación enviada por correo electrónico')
  }
  
  return (
    <Container>
      <SuccessIcon>
        <CheckCircle />
      </SuccessIcon>
      
      <Title>¡Pedido Confirmado!</Title>
      <Subtitle>
        Gracias por tu compra. Hemos recibido tu pedido y comenzaremos la implementación de inmediato.
      </Subtitle>
      
      <OrderDetails>
        <OrderNumber>
          <div className="label">Número de Orden</div>
          <div className="number">{orderNumber}</div>
        </OrderNumber>
        
        <DetailRow>
          <div className="label">
            <Calendar />
            Fecha del Pedido
          </div>
          <div className="value">{new Date().toLocaleDateString('es-GT')}</div>
        </DetailRow>
        
        <DetailRow>
          <div className="label">
            <Package />
            Tiempo de Implementación
          </div>
          <div className="value">24-48 horas</div>
        </DetailRow>
        
        <DetailRow>
          <div className="label">
            <CreditCard />
            Método de Pago
          </div>
          <div className="value">Tarjeta terminada en 1111</div>
        </DetailRow>
        
        <DetailRow>
          <div className="label">
            <Mail />
            Email de Confirmación
          </div>
          <div className="value">juan.perez@empresa.com</div>
        </DetailRow>
        
        {items && items.length > 0 && (
          <ProductList>
            <h3 style={{ marginBottom: theme.spacing.md }}>Productos Adquiridos:</h3>
            {items.map((item: any, index: number) => (
              <ProductItem key={index}>
                <div>
                  <div className="name">{item.product.name}</div>
                  <div className="details">Cantidad: {item.quantity}</div>
                </div>
                <div>Q{(item.product.price * item.quantity).toFixed(2)}</div>
              </ProductItem>
            ))}
          </ProductList>
        )}
        
        <TotalAmount>
          Total Pagado: Q{total.toFixed(2)}
        </TotalAmount>
      </OrderDetails>
      
      <Actions>
        <ActionButton onClick={handlePrint}>
          <Printer />
          Imprimir Orden
        </ActionButton>
        
        <ActionButton onClick={handleDownloadInvoice}>
          <Download />
          Descargar Factura
        </ActionButton>
        
        <ActionButton onClick={handleSendEmail}>
          <Mail />
          Reenviar Email
        </ActionButton>
      </Actions>
      
      <NextSteps>
        <h3>Próximos Pasos:</h3>
        <ul>
          <li>
            Recibirás un correo con las credenciales de acceso y guías de instalación en las próximas 24 horas
          </li>
          <li>
            Nuestro equipo de soporte técnico se pondrá en contacto contigo para coordinar la implementación
          </li>
          <li>
            Tendrás acceso al panel de cliente donde podrás gestionar tus licencias y descargar actualizaciones
          </li>
          <li>
            Recuerda que tienes 7 días de garantía de satisfacción o devolución completa
          </li>
        </ul>
      </NextSteps>
      
      <ContinueButton to="/productos">
        Explorar Más Productos
        <ArrowRight />
      </ContinueButton>
    </Container>
  )
}

export default OrderConfirmationPage