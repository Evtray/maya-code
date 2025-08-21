import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const ProductDetailPage: React.FC = () => {
  return (
    <Container>
      <h1>Detalle del Producto</h1>
      <p>Página en construcción</p>
    </Container>
  )
}

export default ProductDetailPage