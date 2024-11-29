import { ProductCard } from '@/components/product'
import { fetchProductsByGQL } from '@/lib/api/api'
import s from './search.module.css'

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const { query } = searchParams
  const searchQuery = (query && { name: { contains: query } }) || undefined
  const { articles = [] } = await fetchProductsByGQL(searchQuery)
  return (
    <div className='p-8 font-[family-name:var(--font-geist-sans)]'>
      <div className={s.title}>Buscar</div>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(13.5rem,1fr))] gap-4
'>
        {articles.map((product) => {
          return (
            <div key={product.slug} className=''>
              <ProductCard
                key={product.slug}
                product={product}
                variant='simple'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
