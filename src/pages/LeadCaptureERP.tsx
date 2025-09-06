import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Database, Check, ArrowRight, Users, Shield } from 'lucide-react'
import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
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
  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.lg};
    font-family: ${theme.fonts.heading};
  }
  
  p {
    font-size: 1.2rem;
    color: ${theme.colors.text.secondary};
    line-height: 1.8;
    margin-bottom: ${theme.spacing.xl};
  }
`

const Benefits = styled.div`
  margin-bottom: ${theme.spacing.xl};
`

const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  
  .icon {
    width: 40px;
    height: 40px;
    background: ${theme.colors.primary}20;
    border-radius: ${theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    svg {
      width: 20px;
      height: 20px;
      color: ${theme.colors.primary};
    }
  }
  
  .text {
    h3 {
      font-size: 1.1rem;
      color: ${theme.colors.text.primary};
      margin-bottom: 4px;
    }
    
    p {
      font-size: 0.95rem;
      color: ${theme.colors.text.secondary};
      margin: 0;
    }
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
  
  input, select, textarea {
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
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
`

const SubmitButton = styled.button`
  padding: ${theme.spacing.md};
  background: ${theme.colors.primary};
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
    background: ${theme.colors.tech.dark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`

const Trust = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
  
  svg {
    width: 16px;
    height: 16px;
    color: ${theme.colors.success};
  }
`

const LeadCaptureERP: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    businessType: '',
    currentSystem: '',
    needs: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se enviaría el formulario
    console.log('Formulario ERP enviado:', formData)
    navigate('/confirmacion-lead')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Container>
      <Content>
        <InfoSection>
          <h1>Módulo de Inventario Básico ERP</h1>
          <p>
            Simplifica la gestión de tu inventario con nuestro módulo ERP diseñado 
            especialmente para pequeñas y medianas empresas guatemaltecas.
          </p>
          
          <Benefits>
            <Benefit>
              <div className="icon">
                <Database />
              </div>
              <div className="text">
                <h3>Control Total del Inventario</h3>
                <p>Gestiona productos, entradas y salidas en tiempo real</p>
              </div>
            </Benefit>
            
            <Benefit>
              <div className="icon">
                <Users />
              </div>
              <div className="text">
                <h3>Multi-usuario</h3>
                <p>Permite acceso a múltiples usuarios con diferentes permisos</p>
              </div>
            </Benefit>
            
            <Benefit>
              <div className="icon">
                <Shield />
              </div>
              <div className="text">
                <h3>Datos Seguros</h3>
                <p>Backup automático y encriptación de información sensible</p>
              </div>
            </Benefit>
          </Benefits>
          
          <p style={{ fontSize: '0.95rem', fontStyle: 'italic' }}>
            "Este módulo nos ahorró 10 horas semanales en gestión de inventario" 
            <br />- Juan Pérez, Ferretería El Constructor
          </p>
        </InfoSection>
        
        <FormCard>
          <h2>Obtén tu Módulo ERP Hoy</h2>
          <div className="price">
            <span className="amount">Q159</span>
            <span className="original">Q199</span>
            <span className="badge">20% OFF</span>
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
                placeholder="Juan Pérez"
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
                placeholder="juan@empresa.com"
              />
            </FormGroup>
            
            <FormGroup>
              <label>Empresa *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Mi Empresa S.A."
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
              <label>Tipo de Negocio *</label>
              <select 
                name="businessType" 
                value={formData.businessType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="tienda">Tienda/Abarrotería</option>
                <option value="ferreteria">Ferretería</option>
                <option value="farmacia">Farmacia</option>
                <option value="restaurante">Restaurante</option>
                <option value="taller">Taller/Servicio</option>
                <option value="otro">Otro</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label>¿Qué sistema usas actualmente?</label>
              <select 
                name="currentSystem" 
                value={formData.currentSystem}
                onChange={handleChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="excel">Excel/Hojas de cálculo</option>
                <option value="papel">Papel/Cuadernos</option>
                <option value="otro_software">Otro software</option>
                <option value="ninguno">Ninguno</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label>¿Qué necesitas resolver con el ERP?</label>
              <textarea
                name="needs"
                value={formData.needs}
                onChange={handleChange}
                placeholder="Ej: Control de stock, alertas de inventario bajo, reportes mensuales..."
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              Obtener Módulo ERP Ahora
              <ArrowRight />
            </SubmitButton>
          </Form>
          
          <Trust>
            <Shield />
            <span>Compra 100% segura - Soporte técnico incluido</span>
          </Trust>
        </FormCard>
      </Content>
    </Container>
  )
}

export default LeadCaptureERP