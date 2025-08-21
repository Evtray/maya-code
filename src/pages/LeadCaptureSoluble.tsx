import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Zap, Mail, User, MapPin, Coffee, Package } from 'lucide-react'
import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background};
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
  overflow: hidden;
`

const FormHeader = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  padding: ${theme.spacing.xxl};
  text-align: center;
  color: white;
  
  h1 {
    font-size: 2rem;
    margin-bottom: ${theme.spacing.sm};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.md};
    
    svg {
      width: 32px;
      height: 32px;
    }
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.95;
  }
`

const FormBody = styled.form`
  padding: ${theme.spacing.xxl};
`

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
`

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.primary};
  }
`

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.coffee.cream};
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(107, 68, 35, 0.1);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.coffee.cream};
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  font-family: ${theme.fonts.main};
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(107, 68, 35, 0.1);
  }
`

const Select = styled.select`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.coffee.cream};
  border-radius: ${theme.borderRadius.md};
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(107, 68, 35, 0.1);
  }
`

const RadioGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.coffee.cream};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${theme.colors.secondary};
    background: ${theme.colors.coffee.cream};
  }
  
  &.selected {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.coffee.cream};
  }
  
  input {
    margin-right: ${theme.spacing.sm};
  }
`

const SubmitButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.lg};
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.md};
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-top: ${theme.spacing.xl};
  
  &:hover {
    background: ${theme.colors.coffee.dark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`

const Disclaimer = styled.p`
  text-align: center;
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-top: ${theme.spacing.md};
`

const Benefits = styled.div`
  background: ${theme.colors.coffee.cream};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
  }
  
  ul {
    list-style: none;
    
    li {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.sm};
      color: ${theme.colors.text.secondary};
      
      &::before {
        content: "✓";
        color: ${theme.colors.success};
        font-weight: bold;
      }
    }
  }
`

const LeadCaptureSoluble: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    direccion: '',
    sabor: '',
    cantidad: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simular guardado de datos
    console.log('Lead capturado - Café Soluble:', formData)
    
    // Guardar en localStorage para simular persistencia
    localStorage.setItem('leadData', JSON.stringify({
      ...formData,
      tipo: 'soluble',
      fecha: new Date().toISOString()
    }))
    
    // Navegar a página de confirmación
    navigate('/confirmacion-lead')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <FormContainer>
        <FormHeader>
          <h1>
            <Zap />
            Café Soluble Premium
          </h1>
          <p>Completa tus datos para recibir una oferta exclusiva</p>
        </FormHeader>
        
        <FormBody onSubmit={handleSubmit}>
          <Benefits>
            <h3>Al completar este formulario recibirás:</h3>
            <ul>
              <li>20% de descuento en tu primera compra</li>
              <li>Muestra gratis de nuestro nuevo sabor</li>
              <li>Guía de preparación perfecta</li>
              <li>Acceso a ofertas exclusivas</li>
            </ul>
          </Benefits>
          
          <FormGroup>
            <Label>
              <User />
              Nombre Completo
            </Label>
            <Input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Juan Pérez"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label>
              <Mail />
              Correo Electrónico
            </Label>
            <Input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="juan@ejemplo.com"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label>
              <MapPin />
              Dirección de Entrega
            </Label>
            <TextArea
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Calle, número, colonia, ciudad, código postal"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label>
              <Coffee />
              Sabor Preferido
            </Label>
            <RadioGroup>
              <RadioOption className={formData.sabor === 'clasico' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="sabor"
                  value="clasico"
                  checked={formData.sabor === 'clasico'}
                  onChange={handleChange}
                  required
                />
                Clásico
              </RadioOption>
              <RadioOption className={formData.sabor === 'intenso' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="sabor"
                  value="intenso"
                  checked={formData.sabor === 'intenso'}
                  onChange={handleChange}
                />
                Intenso
              </RadioOption>
              <RadioOption className={formData.sabor === 'suave' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="sabor"
                  value="suave"
                  checked={formData.sabor === 'suave'}
                  onChange={handleChange}
                />
                Suave
              </RadioOption>
              <RadioOption className={formData.sabor === 'descafeinado' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="sabor"
                  value="descafeinado"
                  checked={formData.sabor === 'descafeinado'}
                  onChange={handleChange}
                />
                Descafeinado
              </RadioOption>
            </RadioGroup>
          </FormGroup>
          
          <FormGroup>
            <Label>
              <Package />
              Cantidad Deseada
            </Label>
            <Select
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una cantidad</option>
              <option value="100g">100g - Prueba (Q45)</option>
              <option value="250g">250g - Personal (Q85)</option>
              <option value="500g">500g - Familiar (Q150)</option>
              <option value="1kg">1kg - Ahorro (Q280)</option>
              <option value="mayoreo">Mayoreo - Solicitar cotización</option>
            </Select>
          </FormGroup>
          
          <SubmitButton type="submit">
            Obtener Mi Oferta Exclusiva
          </SubmitButton>
          
          <Disclaimer>
            Al enviar este formulario, aceptas recibir comunicaciones de MayaCode 
            con ofertas y contenido exclusivo. Puedes cancelar en cualquier momento.
          </Disclaimer>
        </FormBody>
      </FormContainer>
    </Container>
  )
}

export default LeadCaptureSoluble