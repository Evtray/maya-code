import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Code, Check, ArrowRight, Zap, Copy } from 'lucide-react'
import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxl};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const InfoSection = styled.div`
  color: white;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: ${theme.spacing.lg};
    font-family: ${theme.fonts.heading};
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: ${theme.spacing.xl};
    opacity: 0.95;
  }
`

const CodePreview = styled.div`
  background: #1e1e1e;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  position: relative;
  
  pre {
    color: #d4d4d4;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    overflow-x: auto;
  }
  
  .copy-btn {
    position: absolute;
    top: ${theme.spacing.md};
    right: ${theme.spacing.md};
    background: ${theme.colors.primary};
    color: white;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.md};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${theme.colors.tech.dark};
    }
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`

const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};
`

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: white;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.secondary};
  }
`

const FormCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xxl};
  box-shadow: ${theme.shadows.xl};
  
  h2 {
    font-size: 1.8rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
  }
  
  .price {
    display: flex;
    align-items: baseline;
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
    
    .amount {
      font-size: 2.5rem;
      font-weight: bold;
      color: ${theme.colors.primary};
    }
    
    .original {
      font-size: 1.5rem;
      color: ${theme.colors.text.disabled};
      text-decoration: line-through;
    }
    
    .badge {
      background: ${theme.colors.success};
      color: white;
      padding: 4px 12px;
      border-radius: ${theme.borderRadius.full};
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`

const FormGroup = styled.div`
  label {
    display: block;
    margin-bottom: ${theme.spacing.xs};
    color: ${theme.colors.text.primary};
    font-weight: 500;
  }
  
  input, select {
    width: 100%;
    padding: ${theme.spacing.sm};
    border: 2px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px ${theme.colors.primary}20;
    }
  }
`

const SubmitButton = styled.button`
  padding: ${theme.spacing.md};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: ${theme.borderRadius.md};
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  transition: all 0.3s ease;
  margin-top: ${theme.spacing.md};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const Guarantee = styled.div`
  background: ${theme.colors.warning}10;
  border: 1px solid ${theme.colors.warning};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  text-align: center;
  
  p {
    color: ${theme.colors.text.primary};
    font-size: 0.95rem;
    margin: 0;
    
    strong {
      color: ${theme.colors.warning};
    }
  }
`

const LeadCaptureWeb: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    projectType: '',
    experience: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario Web enviado:', formData)
    navigate('/confirmacion-lead')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const codeExample = `<form class="contact-form">
  <input type="text" 
         pattern="[A-Za-z ]+" 
         required />
  <input type="email" 
         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" 
         required />
  <button type="submit">Enviar</button>
</form>`

  return (
    <Container>
      <Content>
        <InfoSection>
          <h1>Formulario Web con Validación Profesional</h1>
          <p>
            Ahorra horas de desarrollo con nuestro snippet de formulario 
            probado y optimizado. Listo para copiar, pegar y personalizar.
          </p>
          
          <CodePreview>
            <div className="copy-btn">
              <Copy />
              Copiar
            </div>
            <pre>{codeExample}</pre>
          </CodePreview>
          
          <Features>
            <Feature>
              <Check />
              <span>Validación en tiempo real</span>
            </Feature>
            <Feature>
              <Check />
              <span>Anti-spam integrado</span>
            </Feature>
            <Feature>
              <Check />
              <span>Responsive design</span>
            </Feature>
            <Feature>
              <Check />
              <span>Cross-browser compatible</span>
            </Feature>
            <Feature>
              <Check />
              <span>Accesible (WCAG 2.1)</span>
            </Feature>
            <Feature>
              <Check />
              <span>SEO optimizado</span>
            </Feature>
          </Features>
        </InfoSection>
        
        <FormCard>
          <h2>Obtén tu Formulario Profesional</h2>
          <div className="price">
            <span className="amount">Q74</span>
            <span className="original">Q99</span>
            <span className="badge">25% OFF</span>
          </div>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label>Nombre Completo *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </FormGroup>
            
            <FormGroup>
              <label>Correo Electrónico *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </FormGroup>
            
            <FormGroup>
              <label>Sitio Web (opcional)</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://tusitio.com"
              />
            </FormGroup>
            
            <FormGroup>
              <label>Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="5555-5555"
              />
            </FormGroup>
            
            <FormGroup>
              <label>Tipo de Proyecto *</label>
              <select 
                name="projectType" 
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="landing">Landing Page</option>
                <option value="corporativo">Sitio Corporativo</option>
                <option value="ecommerce">E-commerce</option>
                <option value="blog">Blog/Portal</option>
                <option value="webapp">Aplicación Web</option>
                <option value="otro">Otro</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label>Experiencia en Desarrollo</label>
              <select 
                name="experience" 
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="principiante">Principiante</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
                <option value="profesional">Profesional</option>
              </select>
            </FormGroup>
            
            <SubmitButton type="submit">
              <Zap />
              Descargar Formulario Ahora
              <ArrowRight />
            </SubmitButton>
          </Form>
          
          <Guarantee>
            <p>
              <strong>Garantía de satisfacción:</strong> Si no es lo que esperabas, 
              te devolvemos tu dinero en 7 días.
            </p>
          </Guarantee>
        </FormCard>
      </Content>
    </Container>
  )
}

export default LeadCaptureWeb