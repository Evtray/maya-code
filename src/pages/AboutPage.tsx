import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const AboutPage: React.FC = () => {
  return (
    <Container>
      <h1>Sobre MayaCode</h1>
      <p>Tradición cafetalera guatemalteca desde el corazón de nuestras montañas</p>
    </Container>
  )
}

export default AboutPage