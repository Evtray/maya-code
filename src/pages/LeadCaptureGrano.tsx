import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Coffee, Mail, User, MapPin, Sliders, Package, Star } from 'lucide-react'
import { theme } from '../styles/theme'

const Container = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background};
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
  overflow: hidden;
`

const FormHeader = styled.div`
  background: linear-gradient(135deg, ${theme.colors.tech.dark} 0%, ${theme.colors.primary} 100%);
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

const FormSection = styled.div`
  margin-bottom: ${theme.spacing.xxl};
  
  h3 {
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.lg};
    padding-bottom: ${theme.spacing.sm};
    border-bottom: 2px solid ${theme.colors.tech.accent};
  }
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
  
  .required {
    color: ${theme.colors.error};
  }
`

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.tech.accent};
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
  border: 2px solid ${theme.colors.tech.accent};
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
  border: 2px solid ${theme.colors.tech.accent};
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

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`

const CheckboxOption = styled.label`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.tech.accent};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${theme.colors.secondary};
    background: ${theme.colors.tech.accent};
  }
  
  &.selected {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.tech.accent};
  }
  
  input {
    margin-right: ${theme.spacing.sm};
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
  border: 2px solid ${theme.colors.tech.accent};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${theme.colors.secondary};
    background: ${theme.colors.tech.accent};
  }
  
  &.selected {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.tech.accent};
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
    background: ${theme.colors.tech.dark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`

const PremiumBadge = styled.div`
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: ${theme.colors.tech.dark};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  
  svg {
    width: 24px;
    height: 24px;
  }
`

const HelpText = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-top: ${theme.spacing.xs};
  font-style: italic;
`

const LeadCaptureGrano: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    direccion: '',
    perfilSabor: [] as string[],
    molienda: '',
    cantidad: '',
    frecuencia: '',
    notas: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simular guardado de datos
    console.log('Lead capturado - Café en Grano:', formData)
    
    // Guardar en localStorage para simular persistencia
    localStorage.setItem('leadData', JSON.stringify({
      ...formData,
      tipo: 'grano',
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

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      perfilSabor: prev.perfilSabor.includes(value)
        ? prev.perfilSabor.filter(item => item !== value)
        : [...prev.perfilSabor, value]
    }))
  }

  return (
    <Container>
      <FormContainer>
        <FormHeader>
          <h1>
            <Coffee />
            Café en Grano Artesanal
          </h1>
          <p>Personaliza tu experiencia de café perfecta</p>
        </FormHeader>
        
        <FormBody onSubmit={handleSubmit}>
          <PremiumBadge>
            <Star />
            Experiencia Premium - Asesoría de Barista Incluida
            <Star />
          </PremiumBadge>
          
          <FormSection>
            <h3>Información Personal</h3>
            
            <FormGroup>
              <Label>
                <User />
                Nombre Completo <span className="required">*</span>
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
                Correo Electrónico <span className="required">*</span>
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
                Dirección de Entrega <span className="required">*</span>
              </Label>
              <TextArea
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Calle, número, colonia, ciudad, código postal"
                required
              />
              <HelpText>Entrega gratis en ciudad capital para pedidos mayores a Q200</HelpText>
            </FormGroup>
          </FormSection>
          
          <FormSection>
            <h3>Personalización de Tu Café</h3>
            
            <FormGroup>
              <Label>
                <Coffee />
                Perfil de Sabor <span className="required">*</span>
              </Label>
              <HelpText>Selecciona todos los sabores que te gustaría experimentar</HelpText>
              <CheckboxGroup>
                {[
                  'Chocolate', 'Caramelo', 'Frutas Rojas', 'Cítricos',
                  'Floral', 'Nuez', 'Especias', 'Miel', 'Vainilla'
                ].map(sabor => (
                  <CheckboxOption
                    key={sabor}
                    className={formData.perfilSabor.includes(sabor) ? 'selected' : ''}
                  >
                    <input
                      type="checkbox"
                      value={sabor}
                      checked={formData.perfilSabor.includes(sabor)}
                      onChange={() => handleCheckboxChange(sabor)}
                    />
                    {sabor}
                  </CheckboxOption>
                ))}
              </CheckboxGroup>
            </FormGroup>
            
            <FormGroup>
              <Label>
                <Sliders />
                Tipo de Molienda <span className="required">*</span>
              </Label>
              <RadioGroup>
                <RadioOption className={formData.molienda === 'grano-entero' ? 'selected' : ''}>
                  <input
                    type="radio"
                    name="molienda"
                    value="grano-entero"
                    checked={formData.molienda === 'grano-entero'}
                    onChange={handleChange}
                    required
                  />
                  Grano Entero
                </RadioOption>
                <RadioOption className={formData.molienda === 'espresso' ? 'selected' : ''}>
                  <input
                    type="radio"
                    name="molienda"
                    value="espresso"
                    checked={formData.molienda === 'espresso'}
                    onChange={handleChange}
                  />
                  Espresso (Fina)
                </RadioOption>
                <RadioOption className={formData.molienda === 'filtro' ? 'selected' : ''}>
                  <input
                    type="radio"
                    name="molienda"
                    value="filtro"
                    checked={formData.molienda === 'filtro'}
                    onChange={handleChange}
                  />
                  Filtro (Media)
                </RadioOption>
                <RadioOption className={formData.molienda === 'prensa' ? 'selected' : ''}>
                  <input
                    type="radio"
                    name="molienda"
                    value="prensa"
                    checked={formData.molienda === 'prensa'}
                    onChange={handleChange}
                  />
                  Prensa (Gruesa)
                </RadioOption>
              </RadioGroup>
              <HelpText>¿No estás seguro? Nuestro barista te ayudará a elegir la mejor opción</HelpText>
            </FormGroup>
          </FormSection>
          
          <FormSection>
            <h3>Cantidad y Frecuencia</h3>
            
            <FormGroup>
              <Label>
                <Package />
                Cantidad Deseada <span className="required">*</span>
              </Label>
              <Select
                name="cantidad"
                value={formData.cantidad}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una cantidad</option>
                <option value="250g">250g - Degustación (Q125)</option>
                <option value="500g">500g - Personal (Q220)</option>
                <option value="1kg">1kg - Familiar (Q400)</option>
                <option value="2kg">2kg - Ahorro (Q750)</option>
                <option value="mayoreo">Mayoreo (5kg+) - Solicitar cotización</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>
                Frecuencia de Entrega (Opcional - 15% descuento en suscripción)
              </Label>
              <Select
                name="frecuencia"
                value={formData.frecuencia}
                onChange={handleChange}
              >
                <option value="">Sin suscripción</option>
                <option value="semanal">Semanal (-15%)</option>
                <option value="quincenal">Quincenal (-15%)</option>
                <option value="mensual">Mensual (-15%)</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>
                Notas Adicionales o Preferencias Especiales
              </Label>
              <TextArea
                name="notas"
                value={formData.notas}
                onChange={handleChange}
                placeholder="Ej: Prefiero café de altura, me gusta muy tostado, soy principiante..."
              />
            </FormGroup>
          </FormSection>
          
          <SubmitButton type="submit">
            Crear Mi Café Personalizado
          </SubmitButton>
        </FormBody>
      </FormContainer>
    </Container>
  )
}

export default LeadCaptureGrano