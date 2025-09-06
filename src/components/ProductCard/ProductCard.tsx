import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ShoppingCart, Star, Code } from 'lucide-react'
import { theme } from '../../styles/theme'
import { Product } from '../../types'

const Card = styled.article`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.sm};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background: ${theme.colors.tech.accent};
`

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`

const Badges = styled.div`
  position: absolute;
  top: ${theme.spacing.sm};
  left: ${theme.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`

const Badge = styled.span<{ type: 'new' | 'sale' | 'bestseller' }>`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  
  background: ${props => {
    switch(props.type) {
      case 'new': return theme.colors.success
      case 'sale': return theme.colors.error
      case 'bestseller': return theme.colors.warning
      default: return theme.colors.primary
    }
  }};
  color: white;
`

const CardContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Category = styled.span`
  color: ${theme.colors.text.secondary};
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${theme.spacing.xs};
`

const ProductName = styled.h3`
  font-size: 1.1rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
  font-family: ${theme.fonts.heading};
  line-height: 1.3;
`

const Origin = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 0.875rem;
  margin-bottom: ${theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};

  svg {
    width: 14px;
    height: 14px;
  }
`

const FlavorNotes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};
`

const FlavorNote = styled.span`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.tech.accent};
  color: ${theme.colors.tech.dark};
  border-radius: ${theme.borderRadius.sm};
  font-size: 0.75rem;
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};
  margin-top: auto;

  svg {
    width: 16px;
    height: 16px;
    color: ${theme.colors.warning};
    fill: ${theme.colors.warning};
  }

  span {
    color: ${theme.colors.text.secondary};
    font-size: 0.875rem;
  }
`

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border};
`

const Price = styled.div`
  display: flex;
  flex-direction: column;
`

const CurrentPrice = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.primary};
`

const OriginalPrice = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.text.secondary};
  text-decoration: line-through;
`

const Actions = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`

const ActionButton = styled.button`
  padding: ${theme.spacing.sm};
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${theme.colors.secondary};
    transform: scale(1.1);
  }
`

const ViewButton = styled(Link)`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.tech.accent};
  color: ${theme.colors.tech.dark};
  border-radius: ${theme.borderRadius.sm};
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.secondary};
    color: white;
  }
`

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price

  return (
    <Card>
      <ImageContainer>
        <ProductImage 
          src={product.image || '/tech-placeholder.jpg'} 
          alt={product.name}
        />
        <Badges>
          {product.isNew && <Badge type="new">Nuevo</Badge>}
          {product.discount && <Badge type="sale">-{product.discount}%</Badge>}
          {product.isBestSeller && <Badge type="bestseller">Más Vendido</Badge>}
        </Badges>
      </ImageContainer>

      <CardContent>
        <Category>
          {product.category === 'erp' ? 'Sistema ERP' : 
           product.category === 'web' ? 'Desarrollo Web' : 
           product.category === 'mobile' ? 'App Móvil' :
           product.category === 'soluble' ? 'Solución Rápida' : 'Producto Digital'}
        </Category>
        <ProductName>{product.name}</ProductName>
        
        <Origin>
          <Code />
          {product.origin}
        </Origin>

        {product.flavorNotes && product.flavorNotes.length > 0 && (
          <FlavorNotes>
            {product.flavorNotes.slice(0, 3).map((note, index) => (
              <FlavorNote key={index}>{note}</FlavorNote>
            ))}
          </FlavorNotes>
        )}

        <Rating>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} />
          ))}
          <span>(4.5)</span>
        </Rating>

        <CardFooter>
          <Price>
            <CurrentPrice>Q{discountedPrice.toFixed(2)}</CurrentPrice>
            {product.discount && (
              <OriginalPrice>Q{product.price.toFixed(2)}</OriginalPrice>
            )}
          </Price>

          <Actions>
            <ViewButton to={`/producto/${product.id}`}>Ver</ViewButton>
            <ActionButton onClick={() => onAddToCart(product)}>
              <ShoppingCart />
            </ActionButton>
          </Actions>
        </CardFooter>
      </CardContent>
    </Card>
  )
}