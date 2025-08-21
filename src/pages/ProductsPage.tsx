import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { theme } from '../styles/theme'
import { Product } from '../types'
import { useCart } from '../context/CartContext'
import { Grid, List } from 'lucide-react'

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
`

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};

  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: 1.2rem;
  }
`

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Sidebar = styled.aside`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  height: fit-content;
  position: sticky;
  top: 100px;
`

const FilterSection = styled.div`
  margin-bottom: ${theme.spacing.xl};

  h3 {
    font-size: 1.1rem;
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.text.primary};
  }
`

const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  cursor: pointer;
  color: ${theme.colors.text.secondary};

  input {
    width: auto;
  }

  &:hover {
    color: ${theme.colors.primary};
  }
`

const MainContent = styled.main``

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.xl};
  padding: ${theme.spacing.md};
  background: white;
  border-radius: ${theme.borderRadius.md};
`

const ResultCount = styled.span`
  color: ${theme.colors.text.secondary};
`

const ViewOptions = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`

const ViewButton = styled.button<{ active?: boolean }>`
  padding: ${theme.spacing.sm};
  background: ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : theme.colors.text.secondary};
  border-radius: ${theme.borderRadius.sm};

  svg {
    width: 20px;
    height: 20px;
  }
`

const ProductGrid = styled.div<{ viewMode: 'grid' | 'list' }>`
  display: grid;
  grid-template-columns: ${props => 
    props.viewMode === 'grid' 
      ? 'repeat(auto-fill, minmax(280px, 1fr))' 
      : '1fr'
  };
  gap: ${theme.spacing.xl};
`

const SortSelect = styled.select`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.coffee.light};
  border-radius: ${theme.borderRadius.sm};
  background: white;
  color: ${theme.colors.text.primary};
`

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Café Soluble Premium Antigua',
    description: 'Sabor intenso y aroma inconfundible',
    price: 85.00,
    category: 'soluble',
    origin: 'Antigua Guatemala',
    intensity: 'fuerte',
    flavorNotes: ['Chocolate', 'Caramelo', 'Nuez'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    stock: 50,
    isNew: true,
    discount: 15
  },
  {
    id: '2',
    name: 'Café en Grano Huehuetenango',
    description: 'Notas frutales y acidez balanceada',
    price: 125.00,
    category: 'grano',
    origin: 'Huehuetenango',
    intensity: 'medio',
    flavorNotes: ['Frutas rojas', 'Miel', 'Cítricos'],
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    stock: 30,
    isBestSeller: true
  },
  {
    id: '3',
    name: 'Café Soluble Descafeinado',
    description: 'Todo el sabor sin cafeína',
    price: 75.00,
    category: 'soluble',
    origin: 'Cobán',
    intensity: 'suave',
    flavorNotes: ['Vainilla', 'Almendra', 'Miel'],
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400',
    stock: 45
  },
  {
    id: '4',
    name: 'Café en Grano Edición Especial',
    description: 'Reserva limitada de altura',
    price: 165.00,
    category: 'grano',
    origin: 'Alta Verapaz',
    intensity: 'fuerte',
    flavorNotes: ['Chocolate negro', 'Especias', 'Tabaco'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    stock: 20,
    isNew: true
  },
  {
    id: '5',
    name: 'Café Soluble Orgánico',
    description: 'Certificado orgánico, sabor puro',
    price: 95.00,
    category: 'soluble',
    origin: 'San Marcos',
    intensity: 'medio',
    flavorNotes: ['Cacao', 'Frutos secos', 'Panela'],
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400',
    stock: 35
  },
  {
    id: '6',
    name: 'Café en Grano Single Origin',
    description: 'Una sola finca, sabor único',
    price: 145.00,
    category: 'grano',
    origin: 'Acatenango',
    intensity: 'medio',
    flavorNotes: ['Floral', 'Cítrico', 'Té negro'],
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    stock: 25,
    isBestSeller: true
  }
]

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const { addToCart } = useCart()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts)
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    intensity: '',
    origin: '',
    priceRange: ''
  })
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    let filtered = [...mockProducts]

    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category)
    }
    if (filters.intensity) {
      filtered = filtered.filter(p => p.intensity === filters.intensity)
    }
    if (filters.origin) {
      filtered = filtered.filter(p => p.origin === filters.origin)
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    setFilteredProducts(filtered)
  }, [filters, sortBy])

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType as keyof typeof filters] === value ? '' : value
    }))
  }

  return (
    <PageContainer>
      <PageHeader>
        <h1>Nuestros Productos</h1>
        <p>Explora nuestra selección de cafés guatemaltecos premium</p>
      </PageHeader>

      <ContentLayout>
        <Sidebar>
          <FilterSection>
            <h3>Categoría</h3>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.category === 'soluble'}
                onChange={() => handleFilterChange('category', 'soluble')}
              />
              Café Soluble
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.category === 'grano'}
                onChange={() => handleFilterChange('category', 'grano')}
              />
              Café en Grano
            </FilterOption>
          </FilterSection>

          <FilterSection>
            <h3>Intensidad</h3>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.intensity === 'suave'}
                onChange={() => handleFilterChange('intensity', 'suave')}
              />
              Suave
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.intensity === 'medio'}
                onChange={() => handleFilterChange('intensity', 'medio')}
              />
              Medio
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.intensity === 'fuerte'}
                onChange={() => handleFilterChange('intensity', 'fuerte')}
              />
              Fuerte
            </FilterOption>
          </FilterSection>

          <FilterSection>
            <h3>Origen</h3>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.origin === 'Antigua Guatemala'}
                onChange={() => handleFilterChange('origin', 'Antigua Guatemala')}
              />
              Antigua
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.origin === 'Huehuetenango'}
                onChange={() => handleFilterChange('origin', 'Huehuetenango')}
              />
              Huehuetenango
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.origin === 'Alta Verapaz'}
                onChange={() => handleFilterChange('origin', 'Alta Verapaz')}
              />
              Alta Verapaz
            </FilterOption>
          </FilterSection>
        </Sidebar>

        <MainContent>
          <ToolBar>
            <ResultCount>
              {filteredProducts.length} productos encontrados
            </ResultCount>

            <div style={{ display: 'flex', gap: theme.spacing.md }}>
              <SortSelect value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Destacados</option>
                <option value="name">Nombre</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
              </SortSelect>

              <ViewOptions>
                <ViewButton 
                  active={viewMode === 'grid'} 
                  onClick={() => setViewMode('grid')}
                >
                  <Grid />
                </ViewButton>
                <ViewButton 
                  active={viewMode === 'list'} 
                  onClick={() => setViewMode('list')}
                >
                  <List />
                </ViewButton>
              </ViewOptions>
            </div>
          </ToolBar>

          <ProductGrid viewMode={viewMode}>
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </ProductGrid>
        </MainContent>
      </ContentLayout>
    </PageContainer>
  )
}

export default ProductsPage