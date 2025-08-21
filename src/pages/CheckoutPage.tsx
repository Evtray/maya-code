import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const CheckoutPage: React.FC = () => {
  return (
    <Container>
      <h1>Checkout</h1>
      <p>Formulario de compra (mockup)</p>
    </Container>
  )
}

export default CheckoutPage