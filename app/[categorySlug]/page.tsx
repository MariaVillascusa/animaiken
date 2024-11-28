import { ProductCard } from '@/components/product'
import {
  fetchCategory,
  fetchProductsByGQL
} from '@/lib/api/api'
import s from './Category.module.css'

interface CategoryPageProps {
  params: {
    categorySlug: string
  }
}
export default async function ({ params }: CategoryPageProps) {
  const { categorySlug } = params
  const [category] = await fetchCategory(categorySlug)
  const { articles = [] } = await fetchProductsByGQL({
    category: { slug: { eq: categorySlug } },
  })
  return (
    <div className='p-8 font-[family-name:var(--font-geist-sans)]'>
      <div className={s.title}>{category.name}</div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
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
