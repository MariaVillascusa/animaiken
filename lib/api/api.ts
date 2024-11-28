import {
  BasicBrand,
  BasicCategory,
  Brand,
  Category,
  Product,
  ProductFilters,
  ProductFiltersGQL,
} from '@/types'

const { STRAPI_API_URL, STRAPI_TOKEN } = process.env
const API_URL = `${STRAPI_API_URL}/api`
const GRAPHQL_URL = `${STRAPI_API_URL}/graphql`

async function fetchApi<T>(path: string, method = 'GET'): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    })
    const result = await res.json()
    return result.data
  } catch (error) {
    console.log(error)
    return getEmptyValue<T>()
  }
}

async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  try {
    const res = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
    const result = await res.json()
    if (result.errors) {
      throw new Error(JSON.stringify(result.errors))
    }
    return result.data
  } catch (error) {
    console.log(error)
    return getEmptyValue<T>()
  }
}

export const fetchNavbar = async () => {
  const query =
    '?fields[0]=id&populate[categories][fields][0]=name&populate[categories][fields][1]=slug&populate[brands][fields][0]=name&populate[brands][fields][1]=slug'
  return await fetchApi<{
    categories: BasicCategory[]
    brands: BasicBrand[]
  }>(`/navbar${query}`)
}

export const fetchCategories = async () => {
  return await fetchApi<Category[]>('/categories')
}

export const fetchCategory = async (slug: string) => {
  const query = `?filters[slug][$eq]=${slug}&fields=id,name,slug,description`
  return await fetchApi<Category[]>(`/categories${query}`)
}

export const fetchBrands = async () => {
  return await fetchApi<Brand[]>('/brands')
}

export const fetchProducts = async (category: string) => {
  const query = `?filter[category][slug][$eq]=${category}&fields=id,documentId,name,slug,price,description&populate[images][fields]=url`
  return await fetchApi<Product[]>(`/articles${query}`)
}

export const fetchProductsByGQL = async (filters: ProductFiltersGQL) => {
  const query = `
    query Articles($filters: ArticleFiltersInput) {
      articles(filters: $filters) {
        name
        slug
        price
        images {
          url
        }
        brand {
          name
        }
      }
    }
  `
  return await fetchGraphQL<{ articles: Product[] }>(query, { filters })
}

function getEmptyValue<T>(): T {
  if (Array.isArray([] as unknown as T)) {
    return [] as T
  } else if ((typeof {} as T) === 'object') {
    return {} as T
  } else if ((typeof '' as T) === 'string') {
    return '' as T
  } else if ((typeof 0 as T) === 'number') {
    return 0 as T
  }
  return null as unknown as T // As a last resort, return null if T is unknown
}
