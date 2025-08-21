import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const ContactPage: React.FC = () => {
  return (
    <Container>
      <h1>Contacto</h1>
      <p>Estamos aquí para ayudarte</p>
    </Container>
  )
}

export default ContactPage