import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Smartphone, Check, ArrowRight, ShoppingCart, Wifi } from 'lucide-react'
import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
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

const PhoneMockup = styled.div`
  width: 280px;
  height: 560px;
  background: white;
  border-radius: 30px;
  padding: 10px;
  margin: 0 auto ${theme.spacing.xl};
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  
  .screen {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .app-icon {
      width: 80px;
      height: 80px;
      background: ${theme.colors.primary};
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      
      svg {
        width: 40px;
        height: 40px;
        color: white;
      }
    }
    
    h3 {
      color: ${theme.colors.text.primary};
      margin-bottom: 10px;
    }
    
    p {
      color: ${theme.colors.text.secondary};
      font-size: 0.9rem;
      text-align: center;
    }
  }
`

const Benefits = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`

const Benefit = styled.div`
  display: flex;
  align-items: start;
  gap: ${theme.spacing.md};
  
  .icon {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: ${theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    svg {
      width: 20px;
      height: 20px;
      color: ${theme.colors.secondary};
    }
  }
  
  .text {
    h3 {
      font-size: 1.1rem;
      margin-bottom: 4px;
    }
    
    p {
      font-size: 0.95rem;
      margin: 0;
      opacity: 0.9;
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
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
    min-height: 80px;
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
  
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
  
  label {
    margin: 0;
    font-size: 0.95rem;
    color: ${theme.colors.text.secondary};
  }
`

const SubmitButton = styled.button`
  padding: ${theme.spacing.md};
  background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
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

const LeadCaptureMobile: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    phone: '',
    businessType: '',
    monthlyOrders: '',
    features: '',
    urgent: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario Mobile enviado:', formData)
    navigate('/confirmacion-lead')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <Container>
      <Content>
        <InfoSection>
          <h1>App de Pedidos Lite para tu Negocio</h1>
          <p>
            La solución perfecta para restaurantes y negocios que quieren 
            digitalizar sus pedidos sin depender de apps costosas.
          </p>
          
          <PhoneMockup>
            <div className="screen">
              <div className="app-icon">
                <ShoppingCart />
              </div>
              <h3>Tu App Personalizada</h3>
              <p>Con tu logo, colores y menú</p>
            </div>
          </PhoneMockup>
          
          <Benefits>
            <Benefit>
              <div className="icon">
                <Wifi />
              </div>
              <div className="text">
                <h3>Funciona sin Internet Constante</h3>
                <p>Modo offline para no perder ventas</p>
              </div>
            </Benefit>
            
            <Benefit>
              <div className="icon">
                <ShoppingCart />
              </div>
              <div className="text">
                <h3>Carrito de Compras Integrado</h3>
                <p>Proceso de pedido simple y rápido</p>
              </div>
            </Benefit>
            
            <Benefit>
              <div className="icon">
                <Smartphone />
              </div>
              <div className="text">
                <h3>100% Personalizable</h3>
                <p>Adaptada a tu marca y necesidades</p>
              </div>
            </Benefit>
          </Benefits>
        </InfoSection>
        
        <FormCard>
          <h2>Solicita tu App de Pedidos</h2>
          <div className="price">
            <span className="amount">Q374</span>
            <span className="original">Q499</span>
            <span className="badge">OFERTA ESPECIAL</span>
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
              <label>Nombre del Negocio *</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                placeholder="Mi Restaurante"
              />
            </FormGroup>
            
            <FormGroup>
              <label>Teléfono *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
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
                <option value="restaurante">Restaurante</option>
                <option value="cafeteria">Cafetería</option>
                <option value="comida_rapida">Comida Rápida</option>
                <option value="panaderia">Panadería/Pastelería</option>
                <option value="tienda">Tienda/Minisuper</option>
                <option value="otro">Otro</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label>Pedidos Mensuales Aproximados</label>
              <select 
                name="monthlyOrders" 
                value={formData.monthlyOrders}
                onChange={handleChange}
              >
                <option value="">Selecciona una opción</option>
                <option value="0-100">Menos de 100</option>
                <option value="100-500">100 - 500</option>
                <option value="500-1000">500 - 1,000</option>
                <option value="1000+">Más de 1,000</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label>¿Qué funciones necesitas?</label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleChange}
                placeholder="Ej: Menú con fotos, pagos en línea, notificaciones..."
              />
            </FormGroup>
            
            <CheckboxGroup>
              <input
                type="checkbox"
                id="urgent"
                name="urgent"
                checked={formData.urgent}
                onChange={handleChange}
              />
              <label htmlFor="urgent">
                Necesito la app urgentemente (entrega en 48 horas)
              </label>
            </CheckboxGroup>
            
            <SubmitButton type="submit">
              Obtener Mi App de Pedidos
              <ArrowRight />
            </SubmitButton>
          </Form>
        </FormCard>
      </Content>
    </Container>
  )
}

export default LeadCaptureMobile