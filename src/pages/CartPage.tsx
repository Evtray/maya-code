import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const CartPage: React.FC = () => {
  return (
    <Container>
      <h1>Carrito de Compras</h1>
      <p>Tu carrito está vacío</p>
    </Container>
  )
}

export default CartPage