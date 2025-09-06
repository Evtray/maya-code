import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { theme } from '../styles/theme'
import { Product } from '../types'
import { useCart } from '../context/CartContext'
import { Grid, List, Database, Code, Smartphone } from 'lucide-react'

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
  border: 1px solid ${theme.colors.tech.light};
  border-radius: ${theme.borderRadius.sm};
  background: white;
  color: ${theme.colors.text.primary};
`

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Módulo de Inventario Básico (ERP)',
    description: 'Gestión completa de productos, entradas y salidas de inventario',
    price: 199.00,
    category: 'erp',
    origin: 'MayaCode Guatemala',
    intensity: 'profesional',
    flavorNotes: ['Control de Stock', 'Alertas', 'Reportes'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
    stock: 100,
    isNew: true,
    discount: 20,
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Formulario Web con Validación',
    description: 'Snippet listo para copiar y pegar con validación completa',
    price: 99.00,
    category: 'web',
    origin: 'MayaCode Guatemala',
    intensity: 'básico',
    flavorNotes: ['Anti-spam', 'Validación', 'Personalizable'],
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400',
    stock: 200,
    isBestSeller: true
  },
  {
    id: '3',
    name: 'App de Pedidos Lite',
    description: 'Aplicación móvil para restaurantes y delivery',
    price: 499.00,
    category: 'mobile',
    origin: 'MayaCode Guatemala',
    intensity: 'avanzado',
    flavorNotes: ['Menú Digital', 'Carrito', 'PDF'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400',
    stock: 50,
    isNew: true,
    discount: 25
  },
  {
    id: '4',
    name: 'Sistema POS Básico',
    description: 'Punto de venta simplificado para tiendas pequeñas',
    price: 299.00,
    category: 'erp',
    origin: 'MayaCode Guatemala',
    intensity: 'intermedio',
    flavorNotes: ['Ventas', 'Inventario', 'Reportes'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
    stock: 75
  },
  {
    id: '5',
    name: 'Landing Page Profesional',
    description: 'Plantilla responsive lista para personalizar',
    price: 149.00,
    category: 'web',
    origin: 'MayaCode Guatemala',
    intensity: 'intermedio',
    flavorNotes: ['SEO', 'Responsive', 'Optimizada'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400',
    stock: 150
  },
  {
    id: '6',
    name: 'Dashboard Analytics',
    description: 'Panel de control con gráficas y métricas',
    price: 249.00,
    category: 'web',
    origin: 'MayaCode Guatemala',
    intensity: 'avanzado',
    flavorNotes: ['Gráficas', 'Tiempo Real', 'Exportable'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    stock: 80,
    isNew: true
  },
  {
    id: '7',
    name: 'Chat Bot Básico',
    description: 'Asistente virtual para atención al cliente',
    price: 179.00,
    category: 'web',
    origin: 'MayaCode Guatemala',
    intensity: 'intermedio',
    flavorNotes: ['24/7', 'Respuestas Automáticas', 'Fácil Configuración'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400',
    stock: 100
  },
  {
    id: '8',
    name: 'App de Citas',
    description: 'Sistema de reservas para servicios profesionales',
    price: 399.00,
    category: 'mobile',
    origin: 'MayaCode Guatemala',
    intensity: 'avanzado',
    flavorNotes: ['Calendario', 'Recordatorios', 'Multi-usuario'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400',
    stock: 60
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
    if (filters.priceRange) {
      switch(filters.priceRange) {
        case '0-100':
          filtered = filtered.filter(p => p.price <= 100)
          break
        case '100-200':
          filtered = filtered.filter(p => p.price > 100 && p.price <= 200)
          break
        case '200-300':
          filtered = filtered.filter(p => p.price > 200 && p.price <= 300)
          break
        case '300+':
          filtered = filtered.filter(p => p.price > 300)
          break
      }
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
        <h1>Catálogo de Productos Digitales</h1>
        <p>Soluciones tecnológicas listas para usar, accesibles y adaptadas para PyMEs</p>
      </PageHeader>

      <ContentLayout>
        <Sidebar>
          <FilterSection>
            <h3>Tipo de Producto</h3>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.category === 'erp'}
                onChange={() => handleFilterChange('category', 'erp')}
              />
              <Database size={16} />
              Sistemas ERP
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.category === 'web'}
                onChange={() => handleFilterChange('category', 'web')}
              />
              <Code size={16} />
              Desarrollo Web
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.category === 'mobile'}
                onChange={() => handleFilterChange('category', 'mobile')}
              />
              <Smartphone size={16} />
              Apps Móviles
            </FilterOption>
          </FilterSection>

          <FilterSection>
            <h3>Nivel de Complejidad</h3>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.intensity === 'básico'}
                onChange={() => handleFilterChange('intensity', 'básico')}
              />
              Básico
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.intensity === 'intermedio'}
                onChange={() => handleFilterChange('intensity', 'intermedio')}
              />
              Intermedio
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.intensity === 'avanzado'}
                onChange={() => handleFilterChange('intensity', 'avanzado')}
              />
              Avanzado
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.intensity === 'profesional'}
                onChange={() => handleFilterChange('intensity', 'profesional')}
              />
              Profesional
            </FilterOption>
          </FilterSection>

          <FilterSection>
            <h3>Rango de Precio</h3>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.priceRange === '0-100'}
                onChange={() => handleFilterChange('priceRange', '0-100')}
              />
              Q0 - Q100
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.priceRange === '100-200'}
                onChange={() => handleFilterChange('priceRange', '100-200')}
              />
              Q100 - Q200
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.priceRange === '200-300'}
                onChange={() => handleFilterChange('priceRange', '200-300')}
              />
              Q200 - Q300
            </FilterOption>
            <FilterOption>
              <input
                type="checkbox"
                checked={filters.priceRange === '300+'}
                onChange={() => handleFilterChange('priceRange', '300+')}
              />
              Más de Q300
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