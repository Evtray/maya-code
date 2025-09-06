import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { 
  User, Mail, Phone, MapPin, CreditCard, Calendar, 
  Lock, ArrowRight, CheckCircle, Building, FileText, Loader
} from 'lucide-react'
import { theme } from '../styles/theme'
import { useCart } from '../context/CartContext'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
  font-family: ${theme.fonts.heading};
`

const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const FormSection = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.sm};
  margin-bottom: ${theme.spacing.lg};
`

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  svg {
    width: 24px;
    height: 24px;
    color: ${theme.colors.primary};
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div<{ fullWidth?: boolean }>`
  grid-column: ${props => props.fullWidth ? '1 / -1' : 'auto'};
`

const Label = styled.label`
  display: block;
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing.xs};
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primary}20;
  }
  
  &::placeholder {
    color: ${theme.colors.text.light};
  }
`

const Select = styled.select`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.primary}20;
  }
`

const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const PaymentMethod = styled.label`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:has(input:checked) {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.primary}10;
  }
  
  &:hover {
    border-color: ${theme.colors.primary}50;
  }
  
  input {
    margin-right: ${theme.spacing.sm};
  }
  
  span {
    font-weight: 500;
  }
`

const OrderSummary = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.sm};
  height: fit-content;
  position: sticky;
  top: 100px;
`

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.md};
  
  span {
    color: ${theme.colors.text.secondary};
  }
  
  strong {
    color: ${theme.colors.text.primary};
  }
`

const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.sm} 0;
  border-bottom: 1px solid ${theme.colors.border};
  
  &:last-of-type {
    border-bottom: none;
    margin-bottom: ${theme.spacing.md};
  }
  
  .product-info {
    flex: 1;
    
    .name {
      font-weight: 500;
      color: ${theme.colors.text.primary};
      margin-bottom: ${theme.spacing.xs};
    }
    
    .quantity {
      font-size: 0.9rem;
      color: ${theme.colors.text.secondary};
    }
  }
  
  .price {
    font-weight: bold;
    color: ${theme.colors.primary};
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.border};
  margin: ${theme.spacing.lg} 0;
`

const TotalRow = styled(SummaryRow)`
  font-size: 1.3rem;
  
  strong {
    color: ${theme.colors.primary};
  }
`

const CheckoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  width: 100%;
  padding: ${theme.spacing.md};
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.md};
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: ${theme.spacing.lg};
  
  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  &:disabled {
    background: ${theme.colors.disabled};
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const SecurityNote = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md};
  background: ${theme.colors.success}10;
  border-radius: ${theme.borderRadius.sm};
  margin-top: ${theme.spacing.md};
  
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.success};
  }
  
  span {
    font-size: 0.9rem;
    color: ${theme.colors.text.secondary};
  }
`

const ProcessingOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

const ProcessingModal = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xxl};
  max-width: 500px;
  width: 90%;
  text-align: center;
  animation: slideUp 0.3s ease;
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const ProcessingIcon = styled.div<{ success?: boolean }>`
  width: 80px;
  height: 80px;
  margin: 0 auto ${theme.spacing.lg};
  background: ${props => props.success ? theme.colors.success : theme.colors.primary}20;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 40px;
    height: 40px;
    color: ${props => props.success ? theme.colors.success : theme.colors.primary};
    animation: ${props => props.success ? 'none' : 'spin 1s linear infinite'};
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

const ProcessingTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`

const ProcessingMessage = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.6;
`

const PaymentSummary = styled.div`
  background: ${theme.colors.tech.accent};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin: ${theme.spacing.lg} 0;
  text-align: left;
  
  .row {
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing.sm} 0;
    
    &.total {
      border-top: 2px solid ${theme.colors.border};
      margin-top: ${theme.spacing.sm};
      padding-top: ${theme.spacing.md};
      font-size: 1.2rem;
      font-weight: bold;
      color: ${theme.colors.primary};
    }
  }
`

const ContinueButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.success};
  color: white;
  border-radius: ${theme.borderRadius.md};
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate()
  const { items, getCartTotal, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  const subtotal = getCartTotal()
  const tax = subtotal * 0.12
  const shipping = subtotal > 500 ? 0 : 35
  const total = subtotal + tax + shipping
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulamos procesamiento del pago
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mostramos pantalla de éxito
    setShowSuccess(true)
    
    // Esperamos 3 segundos antes de redirigir
    setTimeout(() => {
      clearCart()
      navigate('/confirmacion-orden', { 
        state: { 
          orderNumber: `MCD-${Date.now()}`,
          total,
          items,
          paymentMethod
        } 
      })
    }, 3000)
  }
  
  const getPaymentMethodDisplay = () => {
    switch(paymentMethod) {
      case 'card': return 'Tarjeta de Crédito'
      case 'transfer': return 'Transferencia Bancaria'
      case 'deposit': return 'Depósito Bancario'
      default: return 'Pago'
    }
  }
  
  if (items.length === 0) {
    navigate('/carrito')
    return null
  }
  
  return (
    <>
      <ProcessingOverlay show={isProcessing || showSuccess}>
        <ProcessingModal>
          {!showSuccess ? (
            <>
              <ProcessingIcon>
                <Loader />
              </ProcessingIcon>
              <ProcessingTitle>Procesando Pago...</ProcessingTitle>
              <ProcessingMessage>
                Estamos procesando tu pago de forma segura. 
                Por favor, no cierres esta ventana.
              </ProcessingMessage>
            </>
          ) : (
            <>
              <ProcessingIcon success>
                <CheckCircle />
              </ProcessingIcon>
              <ProcessingTitle>¡Pago Confirmado!</ProcessingTitle>
              <ProcessingMessage>
                Tu pago ha sido procesado exitosamente.
                Te enviaremos un correo de confirmación a juan.perez@empresa.com
              </ProcessingMessage>
              
              <PaymentSummary>
                <div className="row">
                  <span>Método de Pago:</span>
                  <strong>{getPaymentMethodDisplay()}</strong>
                </div>
                <div className="row">
                  <span>Subtotal:</span>
                  <strong>Q{subtotal.toFixed(2)}</strong>
                </div>
                <div className="row">
                  <span>IVA (12%):</span>
                  <strong>Q{tax.toFixed(2)}</strong>
                </div>
                <div className="row">
                  <span>Implementación:</span>
                  <strong>{shipping === 0 ? 'GRATIS' : `Q${shipping.toFixed(2)}`}</strong>
                </div>
                <div className="row total">
                  <span>Total Pagado:</span>
                  <strong>Q{total.toFixed(2)}</strong>
                </div>
              </PaymentSummary>
              
              <ProcessingMessage style={{ fontSize: '0.9rem', color: theme.colors.text.light }}>
                Redirigiendo a tu orden en 3 segundos...
              </ProcessingMessage>
            </>
          )}
        </ProcessingModal>
      </ProcessingOverlay>
      
      <Container>
      <Title>Finalizar Compra</Title>
      
      <CheckoutContent>
        <form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>
              <User />
              Información Personal
            </SectionTitle>
            <FormGrid>
              <FormGroup>
                <Label htmlFor="firstName">Nombre</Label>
                <Input 
                  id="firstName" 
                  type="text" 
                  placeholder="Juan" 
                  required 
                  defaultValue="Juan"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="lastName">Apellido</Label>
                <Input 
                  id="lastName" 
                  type="text" 
                  placeholder="Pérez" 
                  required 
                  defaultValue="Pérez"
                />
              </FormGroup>
              
              <FormGroup fullWidth>
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="juan.perez@empresa.com" 
                  required 
                  defaultValue="juan.perez@empresa.com"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Teléfono</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="5555-5555" 
                  required 
                  defaultValue="5555-5555"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="nit">NIT</Label>
                <Input 
                  id="nit" 
                  type="text" 
                  placeholder="123456-7" 
                  defaultValue="123456-7"
                />
              </FormGroup>
            </FormGrid>
          </FormSection>
          
          <FormSection>
            <SectionTitle>
              <Building />
              Información de la Empresa
            </SectionTitle>
            <FormGrid>
              <FormGroup fullWidth>
                <Label htmlFor="company">Nombre de la Empresa</Label>
                <Input 
                  id="company" 
                  type="text" 
                  placeholder="Mi Empresa S.A." 
                  required 
                  defaultValue="Mi Empresa S.A."
                />
              </FormGroup>
              
              <FormGroup fullWidth>
                <Label htmlFor="address">Dirección</Label>
                <Input 
                  id="address" 
                  type="text" 
                  placeholder="4ta Calle 5-67 Zona 10" 
                  required 
                  defaultValue="4ta Calle 5-67 Zona 10"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="city">Ciudad</Label>
                <Input 
                  id="city" 
                  type="text" 
                  placeholder="Guatemala" 
                  required 
                  defaultValue="Guatemala"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="department">Departamento</Label>
                <Select id="department" required defaultValue="guatemala">
                  <option value="guatemala">Guatemala</option>
                  <option value="sacatepequez">Sacatepéquez</option>
                  <option value="chimaltenango">Chimaltenango</option>
                  <option value="escuintla">Escuintla</option>
                  <option value="quetzaltenango">Quetzaltenango</option>
                </Select>
              </FormGroup>
            </FormGrid>
          </FormSection>
          
          <FormSection>
            <SectionTitle>
              <CreditCard />
              Método de Pago
            </SectionTitle>
            
            <PaymentMethods>
              <PaymentMethod>
                <input 
                  type="radio" 
                  name="payment" 
                  value="card" 
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Tarjeta</span>
              </PaymentMethod>
              
              <PaymentMethod>
                <input 
                  type="radio" 
                  name="payment" 
                  value="transfer" 
                  checked={paymentMethod === 'transfer'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Transferencia</span>
              </PaymentMethod>
              
              <PaymentMethod>
                <input 
                  type="radio" 
                  name="payment" 
                  value="deposit" 
                  checked={paymentMethod === 'deposit'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Depósito</span>
              </PaymentMethod>
            </PaymentMethods>
            
            {paymentMethod === 'card' && (
              <FormGrid>
                <FormGroup fullWidth>
                  <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                  <Input 
                    id="cardNumber" 
                    type="text" 
                    placeholder="4111 1111 1111 1111" 
                    required 
                    defaultValue="4111 1111 1111 1111"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                  <Input 
                    id="cardName" 
                    type="text" 
                    placeholder="JUAN PEREZ" 
                    required 
                    defaultValue="JUAN PEREZ"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="expiry">Fecha de Vencimiento</Label>
                  <Input 
                    id="expiry" 
                    type="text" 
                    placeholder="MM/AA" 
                    required 
                    defaultValue="12/25"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input 
                    id="cvv" 
                    type="text" 
                    placeholder="123" 
                    required 
                    defaultValue="123"
                  />
                </FormGroup>
              </FormGrid>
            )}
            
            {paymentMethod === 'transfer' && (
              <div style={{ padding: theme.spacing.md, background: theme.colors.tech.accent, borderRadius: theme.borderRadius.md }}>
                <p style={{ marginBottom: theme.spacing.sm }}>
                  <strong>Cuenta de Depósito:</strong>
                </p>
                <p>Banco Industrial - Cuenta Monetaria</p>
                <p>No. 123-456789-0</p>
                <p>MayaCode Digital S.A.</p>
              </div>
            )}
            
            {paymentMethod === 'deposit' && (
              <div style={{ padding: theme.spacing.md, background: theme.colors.tech.accent, borderRadius: theme.borderRadius.md }}>
                <p>Se generará una boleta de depósito que podrás pagar en cualquier agencia bancaria.</p>
              </div>
            )}
          </FormSection>
          
          <CheckoutButton type="submit" disabled={isProcessing}>
            {isProcessing ? (
              <>Procesando...</>
            ) : (
              <>
                <Lock />
                Confirmar Pedido - Q{total.toFixed(2)}
              </>
            )}
          </CheckoutButton>
        </form>
        
        <div>
          <OrderSummary>
            <SectionTitle>
              <FileText />
              Resumen del Pedido
            </SectionTitle>
            
            {items.map((item) => {
              const price = item.product.discount
                ? item.product.price * (1 - item.product.discount / 100)
                : item.product.price
                
              return (
                <ProductRow key={item.product.id}>
                  <div className="product-info">
                    <div className="name">{item.product.name}</div>
                    <div className="quantity">Cantidad: {item.quantity}</div>
                  </div>
                  <div className="price">Q{(price * item.quantity).toFixed(2)}</div>
                </ProductRow>
              )
            })}
            
            <Divider />
            
            <SummaryRow>
              <span>Subtotal:</span>
              <strong>Q{subtotal.toFixed(2)}</strong>
            </SummaryRow>
            
            <SummaryRow>
              <span>IVA (12%):</span>
              <strong>Q{tax.toFixed(2)}</strong>
            </SummaryRow>
            
            <SummaryRow>
              <span>Implementación:</span>
              <strong>{shipping === 0 ? 'GRATIS' : `Q${shipping.toFixed(2)}`}</strong>
            </SummaryRow>
            
            <Divider />
            
            <TotalRow>
              <span>Total a Pagar:</span>
              <strong>Q{total.toFixed(2)}</strong>
            </TotalRow>
            
            <SecurityNote>
              <CheckCircle />
              <span>Pago seguro con encriptación SSL</span>
            </SecurityNote>
          </OrderSummary>
        </div>
      </CheckoutContent>
    </Container>
    </>
  )
}

export default CheckoutPage