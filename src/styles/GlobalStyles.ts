import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text.primary};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: ${theme.spacing.md};
  }

  h1 {
    font-size: 2.5rem;
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 3.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    @media (min-width: ${theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: ${theme.spacing.md};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  button {
    cursor: pointer;
    border: none;
    font-family: ${theme.fonts.main};
    transition: all 0.3s ease;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea, select {
    font-family: ${theme.fonts.main};
    width: 100%;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border: 1px solid ${theme.colors.tech.light};
    border-radius: ${theme.borderRadius.sm};
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.lg};
  }
`