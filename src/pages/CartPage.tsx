import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Package } from 'lucide-react'
import { theme } from '../styles/theme'
import { useCart } from '../context/CartContext'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  min-height: 60vh;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
  font-family: ${theme.fonts.heading};
`

const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const CartItems = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.sm};
`

const EmptyCart = styled.div`
  text-align: center;
  padding: ${theme.spacing.xxl};
  
  svg {
    width: 100px;
    height: 100px;
    color: ${theme.colors.text.light};
    margin-bottom: ${theme.spacing.lg};
  }
  
  h2 {
    font-size: 1.5rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
  }
  
  p {
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing.xl};
  }
`

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  background: ${theme.colors.tech.accent};
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 50px;
    height: 50px;
    color: ${theme.colors.primary};
  }
`

const ItemDetails = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1.2rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.xs};
  }
  
  .category {
    color: ${theme.colors.text.secondary};
    font-size: 0.9rem;
    margin-bottom: ${theme.spacing.sm};
  }
  
  .price {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${theme.colors.primary};
  }
  
  .original-price {
    text-decoration: line-through;
    color: ${theme.colors.text.light};
    font-size: 1rem;
    margin-left: ${theme.spacing.sm};
  }
`

const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${theme.spacing.md};
`

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.xs};
  
  button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${theme.colors.text.secondary};
    border-radius: ${theme.borderRadius.sm};
    transition: all 0.3s ease;
    
    &:hover {
      background: ${theme.colors.primary};
      color: white;
    }
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
  
  span {
    min-width: 40px;
    text-align: center;
    font-weight: bold;
  }
`

const RemoveButton = styled.button`
  color: ${theme.colors.error};
  background: transparent;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${theme.colors.text.primary};
  }
  
  svg {
    width: 16px;
    height: 16px;
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

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
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

const CheckoutButton = styled(Link)`
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
  margin-bottom: ${theme.spacing.md};
  
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

const ContinueButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  width: 100%;
  padding: ${theme.spacing.md};
  background: transparent;
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }
`

const PromoCode = styled.div`
  margin: ${theme.spacing.lg} 0;
  
  input {
    width: 100%;
    padding: ${theme.spacing.sm};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.sm};
    margin-bottom: ${theme.spacing.sm};
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  }
  
  button {
    width: 100%;
    padding: ${theme.spacing.sm};
    background: ${theme.colors.tech.accent};
    color: ${theme.colors.text.primary};
    border-radius: ${theme.borderRadius.sm};
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${theme.colors.tech.light};
    }
  }
`

const CartPage: React.FC = () => {
  const navigate = useNavigate()
  const { items, removeFromCart, updateQuantity, getCartTotal, getItemCount } = useCart()
  
  const subtotal = getCartTotal()
  const tax = subtotal * 0.12 // IVA 12%
  const shipping = subtotal > 500 ? 0 : 35 // Envío gratis arriba de Q500
  const total = subtotal + tax + shipping
  
  const getCategoryDisplay = (category: string) => {
    switch(category) {
      case 'erp': return 'Sistema ERP'
      case 'web': return 'Desarrollo Web'
      case 'mobile': return 'App Móvil'
      default: return 'Producto Digital'
    }
  }
  
  if (items.length === 0) {
    return (
      <Container>
        <Title>Carrito de Compras</Title>
        <EmptyCart>
          <ShoppingBag />
          <h2>Tu carrito está vacío</h2>
          <p>Agrega algunos productos digitales para comenzar tu transformación</p>
          <CheckoutButton to="/productos">
            Explorar Catálogo
            <ArrowRight />
          </CheckoutButton>
        </EmptyCart>
      </Container>
    )
  }
  
  return (
    <Container>
      <Title>Carrito de Compras ({getItemCount()} productos)</Title>
      
      <CartContent>
        <CartItems>
          {items.map((item) => {
            const discountedPrice = item.product.discount
              ? item.product.price * (1 - item.product.discount / 100)
              : item.product.price
              
            return (
              <CartItem key={item.product.id}>
                <ItemImage>
                  <Package />
                </ItemImage>
                
                <ItemDetails>
                  <h3>{item.product.name}</h3>
                  <div className="category">{getCategoryDisplay(item.product.category)}</div>
                  <div className="price">
                    Q{(discountedPrice * item.quantity).toFixed(2)}
                    {item.product.discount && (
                      <span className="original-price">
                        Q{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    )}
                  </div>
                </ItemDetails>
                
                <ItemActions>
                  <QuantityControl>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                      <Minus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                      <Plus />
                    </button>
                  </QuantityControl>
                  
                  <RemoveButton onClick={() => removeFromCart(item.product.id)}>
                    <Trash2 />
                    Eliminar
                  </RemoveButton>
                </ItemActions>
              </CartItem>
            )
          })}
        </CartItems>
        
        <OrderSummary>
          <SummaryTitle>Resumen del Pedido</SummaryTitle>
          
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
          
          {shipping > 0 && (
            <SummaryRow style={{ fontSize: '0.9rem', color: theme.colors.success }}>
              <span>Implementación gratis en compras mayores a Q500</span>
            </SummaryRow>
          )}
          
          <PromoCode>
            <input type="text" placeholder="Código promocional" />
            <button>Aplicar Código</button>
          </PromoCode>
          
          <Divider />
          
          <TotalRow>
            <span>Total:</span>
            <strong>Q{total.toFixed(2)}</strong>
          </TotalRow>
          
          <CheckoutButton to="/checkout">
            Proceder al Pago
            <ArrowRight />
          </CheckoutButton>
          
          <ContinueButton to="/productos">
            Continuar Comprando
          </ContinueButton>
        </OrderSummary>
      </CartContent>
    </Container>
  )
}

export default CartPage